import {ScrollView, TouchableOpacity, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Button from '@shipex/components/Button/Button';
import Input from '@shipex/components/Input/Input';
import Text from '@shipex/components/Text/Text';
import {ChevronLeftIcon} from '@shipex/assets/Svg/Index';
import {colors} from '@shipex/utils/constants';
import {LoginModalStyles} from '../styles/loginModal.styles';
import {ModalLoginProps} from '../types';
import useLoginValidation from '../hooks/useLoginValidation';

export default function LoginModal({
  closeBottomSheet,
  bottomSheetRef,
}: ModalLoginProps) {
  const {pwdError, usrError, handleChange, handleSubmit, pwd, usr, loading} =
    useLoginValidation();
  return (
    <BottomSheet
      handleIndicatorStyle={{display: 'none'}}
      enablePanDownToClose
      handleStyle={LoginModalStyles.handle}
      snapPoints={['100%']}
      index={-1}
      ref={bottomSheetRef}>
      <BottomSheetView style={LoginModalStyles.contentContainer}>
        <View testID="login-bottom-sheet" style={LoginModalStyles.layer}>
          <ScrollView style={LoginModalStyles.scrollView}>
            <View style={LoginModalStyles.content}>
              <View style={LoginModalStyles.decoration} />
              <TouchableOpacity
                testID="login-modal-close-button"
                onPress={closeBottomSheet}
                style={LoginModalStyles.closeModal}>
                <ChevronLeftIcon color={colors.primary} />
                <Text style={LoginModalStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <Text style={LoginModalStyles.loginText}>Login</Text>
              <Text style={LoginModalStyles.loginDescription}>
                Please enter Your Login Details Below To Proceed
              </Text>

              <Input
                value={usr}
                error={usrError}
                onChangeText={handleChange('usr')}
                style={LoginModalStyles.input}
                label="Username/Email"
              />

              <Input
                value={pwd}
                error={pwdError}
                onChangeText={handleChange('pwd')}
                secureTextEntry={true}
                style={LoginModalStyles.input}
                label="Password"
              />

              <Button
                testId="main-login"
                disabled={!usr || !pwd}
                isLoading={loading}
                onPress={handleSubmit}
                style={LoginModalStyles.button}
                label="Login"
              />
            </View>
          </ScrollView>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
