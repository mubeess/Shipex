import BottomSheet from '@gorhom/bottom-sheet';
export type ModalLoginProps = {
  closeBottomSheet: () => void;
  bottomSheetRef: BottomSheet;
};

export type LoginRequest = {
  usr: string;
  pwd: string;
};
