import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const InputStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    height: 56,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.inputBgColor,
    paddingHorizontal: 10,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 5,
    zIndex: 20,
  },
  input: {
    height: '100%',
    paddingLeft: 5,
    color: colors.primary,
  },
  error: {
    color: 'red',
  },
  icon: {
    width: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
