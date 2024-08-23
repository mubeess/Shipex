import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';

import {AuthInputProps} from '../types';
import {colors} from '@shipex/utils/constants';
import {InputStyles} from './input.styles';

const Input = forwardRef<TextInput, AuthInputProps>(
  ({label = '', value, error = '', ...props}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = useSharedValue(value ? 0 : 15);
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => inputRef.current?.clear(),
    }));

    const handleInputFocus = () => {
      setIsFocused(true);
      labelPosition.value = withTiming(0, {duration: 200});
    };

    const handleInputBlur = () => {
      if (!value) {
        setIsFocused(false);
        labelPosition.value = withTiming(15, {duration: 200});
      }
    };

    const animatedLabelStyle = useAnimatedStyle(() => {
      return {
        top: labelPosition.value,
        fontSize: isFocused ? 12 : 16,
        color: '#A7A3B3',
      };
    });
    const animatedBorderStyle = useAnimatedStyle(() => {
      const borderWidth = interpolate(labelPosition.value, [0, 15], [1, 0]);
      const borderColor = interpolateColor(
        labelPosition.value,
        [0, 15],
        [colors.primary, 'transparent'],
      );
      return {
        borderWidth: borderWidth,
        borderColor,
      };
    });
    return (
      <Animated.View
        style={[
          InputStyles.container,
          {
            borderColor: error ? 'red' : 'transparent',
          },
          animatedBorderStyle,
        ]}>
        <TouchableOpacity
          onPress={() => inputRef.current?.focus()}
          activeOpacity={1}
          style={InputStyles.inputContainer}>
          <Animated.Text style={[InputStyles.label, animatedLabelStyle]}>
            {label}
          </Animated.Text>
          <TextInput
            {...props}
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={InputStyles.input}
            value={value}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  },
);

export default Input;
