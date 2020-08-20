import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const DashboardStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Icons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'lightgray',
        showLabel: true,
        showIcon: true,
        keyboardHidesTabBar: true,
        indicatorStyle: {width: 0},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
