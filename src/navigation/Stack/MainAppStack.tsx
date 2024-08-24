import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@shipex/screens/Authentication/Login';
import {RootStackParamList} from '../types';
import DashboardBottomTab from '../Tabs/DashBoardBottomTab';
import {stackScreenOptions} from '../constants/stackScreenOptions';

const Stack = createStackNavigator<RootStackParamList>();

function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={DashboardBottomTab} />
    </Stack.Navigator>
  );
}

export default MainAppStack;
