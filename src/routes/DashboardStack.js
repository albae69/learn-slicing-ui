import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import MessageStack from './MessageStack';

import ProfileScreen from '../screens/Profile';

import {
  home,
  homeActive,
  search,
  searchActive,
  message,
  messageActive,
  profile,
  profileActive,
} from '../assets/icons';

const DashboardStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? homeActive : home;
          } else if (route.name === 'Search') {
            iconName = focused ? searchActive : search;
          } else if (route.name === 'Message') {
            iconName = focused ? messageActive : message;
          } else if (route.name === 'Profile') {
            iconName = focused ? profileActive : profile;
          }
          return <Image source={iconName} alt="" />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        keyboardHidesTabBar: true,
        indicatorStyle: {width: 0},
      }}
      // initialRouteName="Message"
    >
      <Tab.Screen name="Home">{() => <HomeStack />}</Tab.Screen>
      <Tab.Screen name="Search">{() => <SearchStack />}</Tab.Screen>
      <Tab.Screen name="Message">{() => <MessageStack />}</Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
