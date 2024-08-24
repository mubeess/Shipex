import {colors} from '@shipex/utils/constants';
import {StatusBar, StyleSheet} from 'react-native';

export const HeaderStyles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notification: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avataraImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});
