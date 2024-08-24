import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {colors} from '@shipex/utils/constants';
import {DashboardStyles} from '../Tabs/styles/dashboard.style';

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarInactiveTintColor: colors.gray,
  tabBarActiveTintColor: colors.primary,
  tabBarStyle: {
    height: 60,
  },
  tabBarLabelStyle: DashboardStyles.tabBarLabelStyle,
};
