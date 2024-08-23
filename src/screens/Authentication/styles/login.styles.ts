import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 36,
    width: '100%',
    marginTop: 'auto',
  },
  button: {
    marginTop: 'auto',
  },
  buttonText: {
    color: colors.primary,
  },
});
