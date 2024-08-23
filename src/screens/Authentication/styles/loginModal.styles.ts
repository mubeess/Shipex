import {colors} from '@shipex/utils/constants';
import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
export const LoginModalStyles = StyleSheet.create({
  layer: {
    flex: 1,
    width: '100%',
  },
  content: {
    height: height - 50,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
    padding: 10,
    position: 'relative',
    width: '100%',
  },
  decoration: {
    height: 5,
    width: 36,
    backgroundColor: colors.gray,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 2.5,
  },
  closeModal: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 18,
    color: colors.primary,
  },
  loginText: {
    marginVertical: 10,
    color: colors.black,
    fontSize: 34,
    fontWeight: '700',
  },
  loginDescription: {
    color: colors.lightGray,
    fontSize: 18,
    textAlign: 'justify',
  },
  input: {
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  button: {
    marginTop: 'auto',
  },
  error: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f2252523',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    marginLeft: 10,
    zIndex: 999999999999,
  },
  erroText: {
    color: 'red',
    textAlign: 'center',
  },
  handle: {
    padding: 0,
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 100,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
