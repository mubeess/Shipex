import {StyleSheet} from 'react-native';

export const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 56,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'relative',
    overflow: 'hidden',
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
  animatedView: {
    position: 'absolute',
    zIndex: 10,
    opacity: 0.3,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
