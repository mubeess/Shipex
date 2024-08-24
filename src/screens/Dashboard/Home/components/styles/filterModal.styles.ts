import {colors} from '@shipex/utils/constants';
import {StyleSheet} from 'react-native';

export const FilterModalStyles = StyleSheet.create({
  overLay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    width: '100%',
    marginTop: 'auto',
  },
  decoration: {
    height: 5,
    width: 36,
    backgroundColor: colors.gray,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 2.5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBg,
    padding: 20,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  itemButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 10,
  },
  text: {
    color: '#58536E',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  heading: {
    fontWeight: '500',
    fontSize: 13,
    marginVertical: 10,
    marginLeft: 20,
  },
  loading: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
