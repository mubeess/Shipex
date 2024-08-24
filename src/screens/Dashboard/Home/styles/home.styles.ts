import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  hello: {
    color: colors.lightGray,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    width: '45%',
    height: 44,
  },
  shipmentSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  loading: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  userNameText: {
    marginVertical: 10,
    color: colors.black,
    fontSize: 34,
    fontWeight: '700',
  },
  shipmentText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
});
