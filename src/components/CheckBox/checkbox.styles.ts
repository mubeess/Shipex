import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const CheckBoxStyles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});
