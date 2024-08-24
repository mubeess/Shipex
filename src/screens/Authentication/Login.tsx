import React, {useRef} from 'react';
import {Image, StatusBar} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {LogoImage} from '@shipex/assets/Images';
import {colors} from '@shipex/utils/constants';
import Button from '@shipex/components/Button/Button';
import LoginModal from './components/LoginModal';
import {LoginStyles} from './styles/login.styles';

function Login() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      style={LoginStyles.conntainer}>
      <StatusBar animated backgroundColor={colors.primary} />
      <Image
        testID="login-logo"
        resizeMode="contain"
        source={LogoImage}
        style={LoginStyles.logo}
      />
      <Button
        testId="login-button"
        label="Login"
        backgroundColor={colors.white}
        fontColor={colors.primary}
        onPress={openBottomSheet}
        style={LoginStyles.button}
      />
      <LoginModal
        testID="login-bottom-sheet"
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
      />
    </Animated.View>
  );
}

export default Login;
