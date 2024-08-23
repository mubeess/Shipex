import {memo, useEffect} from 'react';
import {ActivityIndicator, Dimensions, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '@shipex/utils/constants';
import {ButtonProps} from '../types';
import {ButtonStyles} from './button.styles';

function Button({
  IconRight,
  IconLeft,
  isLoading = false,
  onPress,
  label,
  style,
  disabled = false,
  backgroundColor = colors.primary,
  fontColor = colors.white,
  ...props
}: ButtonProps) {
  const {width} = Dimensions.get('window');
  const sharedValue = useSharedValue(-width);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: sharedValue.value}],
    };
  });
  const startLoading = () => {
    sharedValue.value = withRepeat(withTiming(0.5, {duration: 1000}), -1, true);
  };
  const stopLoading = () => {
    sharedValue.value = withTiming(-width, {duration: 1000});
  };

  useEffect(() => {
    if (isLoading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isLoading]);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        ButtonStyles.buttonContainer,
        style,
        {backgroundColor: disabled ? colors.disabled : backgroundColor},
      ]}
      {...props}>
      <Animated.View
        style={[
          ButtonStyles.animatedView,
          {backgroundColor: 'rgba(0,0,0,0.5)'},
          reanimatedStyle,
        ]}
      />
      {IconLeft && IconLeft}
      <Animated.Text
        style={[
          ButtonStyles.text,
          {color: disabled ? colors.gray : fontColor},
        ]}>
        {label}
      </Animated.Text>
      {IconRight && !isLoading && IconRight}
      {isLoading && <ActivityIndicator color="#fff" />}
    </TouchableOpacity>
  );
}

export default memo(Button);
