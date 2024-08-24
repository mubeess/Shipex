import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Animated, {Easing, FadeIn} from 'react-native-reanimated';
import CheckBox from '@shipex/components/CheckBox/CheckBox';
import Text from '@shipex/components/Text/Text';
import {BoxImage} from '@shipex/assets/Images';
import {colors} from '@shipex/utils/constants';
import {ShipmentListStyles} from './styles/shipmentList.styles';
import {ItemProps} from '../types';
import {ArrowRightIcon, ExpandIcon} from '@shipex/assets/Svg/Index';

export default function ShipmentList({
  name,
  status,
  currency,
  markAll,
  origin_city,
  destination_city,
}: ItemProps) {
  const [marked, setMarked] = useState(false);
  const toggleMark = () => {
    setMarked(prev => !prev);
  };
  return (
    <Animated.View
      entering={FadeIn.duration(500).easing(Easing.ease)}
      style={ShipmentListStyles.container}>
      <CheckBox isChecked={markAll ? markAll : marked} onCheck={toggleMark} />
      <Image
        resizeMode="contain"
        style={ShipmentListStyles.box}
        source={BoxImage}
      />
      <View style={ShipmentListStyles.details}>
        <Text style={ShipmentListStyles.currency}>{currency}</Text>
        <Text style={ShipmentListStyles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={ShipmentListStyles.location}>
          <Text style={ShipmentListStyles.locationText}>{origin_city}</Text>
          <ArrowRightIcon color={colors.primary} />
          <Text style={ShipmentListStyles.locationText}>
            {destination_city}
          </Text>
        </View>
      </View>

      <View style={[ShipmentListStyles.status, {borderColor: colors.white}]}>
        <Text style={{color: colors.primary}}>{status}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={ShipmentListStyles.expand}>
        <ExpandIcon color={colors.primary} />
      </TouchableOpacity>
    </Animated.View>
  );
}
