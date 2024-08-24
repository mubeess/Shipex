import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from '@gorhom/bottom-sheet';
import {HomeStyles} from './styles/home.styles';
import {FilterIcon, ScanIcon, SearchIcon} from '@shipex/assets/Svg/Index';
import {colors} from '@shipex/utils/constants';
import Text from '@shipex/components/Text/Text';
import Input from '@shipex/components/Input/Input';
import Header from '@shipex/components/Header/Header';
import Button from '@shipex/components/Button/Button';
import CheckBox from '@shipex/components/CheckBox/CheckBox';
import ShipmentList from './components/ShipmentList';
import {useShipmentList} from '@shipex/hooks/useShipment';
import FilterModal from './components/FilterModal';

export default function Home() {
  const [markAll, setMarkAll] = useState(false);
  const [name, setName] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  const toggleMarkAll = () => {
    setMarkAll(prev => !prev);
  };
  const setFullName = async () => {
    const fullName = await AsyncStorage.getItem('full_name');
    if (fullName) {
      setName(fullName);
    }
  };
  const handleSearchTerm = (e: string) => {
    setSearchTerm(e);
  };
  useEffect(() => {
    setFullName();
  }, []);
  const {shipmentList, isLoading, refresh, refetching} =
    useShipmentList(searchTerm);

  return (
    <View style={HomeStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        translucent
      />
      <Header />
      <Text style={HomeStyles.hello}>Hello,</Text>
      <Text style={HomeStyles.userNameText}>{name}</Text>
      <Input
        value={searchTerm}
        onChangeText={handleSearchTerm}
        icon={<SearchIcon color={colors.gray} />}
        placeholder="Search"
      />
      <View style={HomeStyles.actionButtons}>
        <Button
          onPress={openBottomSheet}
          backgroundColor={colors.inputBg}
          IconLeft={<FilterIcon color={colors.iconColor} />}
          style={HomeStyles.button}
          fontColor={colors.iconColor}
          label="Filters"
        />
        <Button
          IconLeft={<ScanIcon color={colors.white} />}
          style={HomeStyles.button}
          label="Add Scan"
        />
      </View>

      <View style={HomeStyles.shipmentSelection}>
        <Text style={HomeStyles.shipmentText}>Shipments</Text>

        <View style={HomeStyles.checkBoxContainer}>
          <CheckBox isChecked={markAll} onCheck={toggleMarkAll} />
          <Text>Mark All</Text>
        </View>
      </View>
      {isLoading && (
        <View testID="loading-indicator" style={HomeStyles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
      {!isLoading && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refetching} onRefresh={refresh} />
          }
          data={shipmentList ? shipmentList : []}
          renderItem={({item}) => <ShipmentList markAll={markAll} {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <FilterModal
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
      />
    </View>
  );
}
