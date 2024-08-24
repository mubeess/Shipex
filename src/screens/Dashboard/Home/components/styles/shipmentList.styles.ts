import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const ShipmentListStyles = StyleSheet.create({
  container: {
    height: 67,
    width: '100%',
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 15,
    marginBottom: 10,
  },
  box: {
    height: 40,
    width: 40,
  },
  details: {
    flex: 1,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 8,
  },
  currency: {
    fontSize: 13,
    color: '#3F395C',
  },
  status: {
    height: 23,
    backgroundColor: colors.primaryLight,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  expand: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#3F395C',
    fontWeight: '700',
  },
});
