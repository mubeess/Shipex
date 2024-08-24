import BottomSheet from '@gorhom/bottom-sheet';
import {ShipmentType} from '@shipex/api/types';

export interface ItemProps extends ShipmentType {
  markAll?: boolean;
}

export type FilterModalProps = {
  closeBottomSheet: () => void;
  bottomSheetRef: BottomSheet;
};
