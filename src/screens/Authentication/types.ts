import BottomSheet from '@gorhom/bottom-sheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@shipex/navigation/types';
export type ModalLoginProps = {
  closeBottomSheet: () => void;
  bottomSheetRef: BottomSheet;
};

export type LoginRequest = {
  usr: string;
  pwd: string;
};
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
