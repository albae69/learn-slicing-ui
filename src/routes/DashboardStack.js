import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import MessageScreen from '../screens/Message';
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
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
