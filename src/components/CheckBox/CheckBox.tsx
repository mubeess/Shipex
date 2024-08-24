import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors} from '@shipex/utils/constants';
import Text from '../Text/Text';
import {CheckBoxStyles} from './checkbox.styles';
import {CheckboxProps} from '../types';

export default function CheckBox({isChecked = false, onCheck}: CheckboxProps) {
  return (
    <TouchableOpacity
      onPress={onCheck}
      style={[
        CheckBoxStyles.container,
        {
          borderColor: isChecked ? colors.primary : colors.gray,
          backgroundColor: isChecked ? colors.primary : colors.white,
        },
      ]}>
      {isChecked && <Text style={CheckBoxStyles.text}>✓</Text>}
    </TouchableOpacity>
  );
}
