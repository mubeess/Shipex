import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AvatarImage, LogoBlue} from '@shipex/assets/Images';
import {BellIcon} from '@shipex/assets/Svg/Index';
import {colors} from '@shipex/utils/constants';

import {HeaderStyles} from './header.styles';

export default function Header() {
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.avatar}>
        <Image source={AvatarImage} style={HeaderStyles.avataraImage} />
      </View>
      <Image resizeMode="contain" source={LogoBlue} />
      <TouchableOpacity style={HeaderStyles.notification}>
        <BellIcon color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
