import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AvatarIcon,
  BarcodeScanIcon,
  ShipmentIcon,
  WalletIcon,
} from '@shipex/assets/Svg/Index';
import Home from '@shipex/screens/Dashboard/Home/Home';
import ScanHome from '@shipex/screens/Dashboard/Scan/ScanHome';
import WalletHome from '@shipex/screens/Dashboard/Wallet/WalletHome';
import ProfileHome from '@shipex/screens/Dashboard/Profile/ProfileHome';
import {RootTabParamList} from '../types';
import {tabScreenOptions} from '../constants/tabScreenOptions';

const Tab = createBottomTabNavigator<RootTabParamList>();
const DashboardBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions} initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: props => <ShipmentIcon {...props} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <BarcodeScanIcon {...props} />,
        }}
        name="Scan"
        component={ScanHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <WalletIcon {...props} />,
        }}
        name="Wallet"
        component={WalletHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props => <AvatarIcon {...props} />,
        }}
        name="Profile"
        component={ProfileHome}
      />
    </Tab.Navigator>
  );
};

export default DashboardBottomTab;
