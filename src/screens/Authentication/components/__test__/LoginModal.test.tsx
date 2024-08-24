import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import LoginModal from '@shipex/screens/Authentication/components/LoginModal';
import useLoginValidation from '@shipex/screens/Authentication/hooks/useLoginValidation';

// Mock useLoginValidation hook
jest.mock('@shipex/screens/Authentication/hooks/useLoginValidation', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock useLogin hook
jest.mock('@shipex/hooks/useLogin', () => ({
  useLogin: jest.fn(() => ({
    login: jest.fn().mockResolvedValue({full_name: 'John Doe'}),
    loading: false,
  })),
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('LoginModal', () => {
  const closeBottomSheetMock = jest.fn();
  const bottomSheetRefMock = {
    current: {close: jest.fn(), snapToIndex: jest.fn()},
  };

  beforeEach(() => {
    (useLoginValidation as jest.Mock).mockReturnValue({
      usr: '',
      pwd: '',
      usrError: '',
      pwdError: '',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      loading: false,
    });
  });

  it('should render the logo, inputs, button, and close button', () => {
    const {getByText, getByTestId} = render(
      <BottomSheetModalProvider>
        <LoginModal
          closeBottomSheet={closeBottomSheetMock}
          bottomSheetRef={bottomSheetRefMock}
        />
      </BottomSheetModalProvider>,
    );

    // Check if the close button is rendered
    expect(getByTestId('login-modal-close-button')).toBeTruthy();

    // Check if the login text is rendered
    expect(getByTestId('main-login')).toBeTruthy();
    expect(
      getByText('Please enter Your Login Details Below To Proceed'),
    ).toBeTruthy();

    // Check if input fields and button are rendered
    expect(getByText('Username/Email')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByTestId('main-login')).toBeTruthy();
  });

  it('should call closeBottomSheet when close button is pressed', () => {
    const {getByTestId} = render(
      <BottomSheetModalProvider>
        <LoginModal
          closeBottomSheet={closeBottomSheetMock}
          bottomSheetRef={bottomSheetRefMock}
        />
      </BottomSheetModalProvider>,
    );

    // Simulate pressing the close button
    fireEvent.press(getByTestId('login-modal-close-button'));

    // Check if the closeBottomSheet function was called
    expect(closeBottomSheetMock).toHaveBeenCalled();
  });

  it('should call handleSubmit when login button is pressed', async () => {
    (useLoginValidation as jest.Mock).mockReturnValue({
      usr: 'testuser',
      pwd: 'testpassword',
      usrError: '',
      pwdError: '',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(() => Promise.resolve()),
      loading: false,
    });

    const {getByTestId} = render(
      <BottomSheetModalProvider>
        <LoginModal
          closeBottomSheet={closeBottomSheetMock}
          bottomSheetRef={bottomSheetRefMock}
        />
      </BottomSheetModalProvider>,
    );

    // Simulate pressing the login button
    fireEvent.press(getByTestId('main-login'));

    // Check if handleSubmit function was called
    await waitFor(() => {
      expect(useLoginValidation().handleSubmit).toHaveBeenCalled();
    });
  });
});
