import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@shipex/screens/Authentication/Login';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

function MainAppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MainAppStack;
