import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Text from '@shipex/components/Text/Text';
import {FilterModalProps} from '../types';
import {FilterModalStyles} from './styles/filterModal.styles';
import {colors} from '@shipex/utils/constants';
import {useShipmentStatus} from '@shipex/hooks/useShipment';
import {LoginModalStyles} from '@shipex/screens/Authentication/styles/loginModal.styles';

export default function FilterModal({
  bottomSheetRef,
  closeBottomSheet,
}: FilterModalProps) {
  const {shpmentStatus, isLoading} = useShipmentStatus();
  return (
    <BottomSheet
      backgroundStyle={FilterModalStyles.overLay}
      handleIndicatorStyle={{display: 'none'}}
      enablePanDownToClose
      handleStyle={LoginModalStyles.handle}
      snapPoints={['100%']}
      index={-1}
      ref={bottomSheetRef}>
      <StatusBar backgroundColor="transparent" translucent />
      <BottomSheetView style={LoginModalStyles.contentContainer}>
        <View testID="login-bottom-sheet" style={FilterModalStyles.content}>
          <View style={FilterModalStyles.decoration} />
          <View style={FilterModalStyles.actionButtons}>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Text style={FilterModalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <Text>Filters</Text>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Text style={FilterModalStyles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>

          <Text style={FilterModalStyles.heading}>SHIPMENT STATUS</Text>

          {isLoading && (
            <View style={FilterModalStyles.loading}>
              <ActivityIndicator color={colors.primary} />
            </View>
          )}

          <View style={FilterModalStyles.list}>
            {!isLoading &&
              shpmentStatus &&
              shpmentStatus.map(item => (
                <TouchableOpacity
                  onPress={() => {}}
                  key={item.name}
                  style={FilterModalStyles.itemButton}>
                  <Text style={FilterModalStyles.text}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
