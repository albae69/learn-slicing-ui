import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProjectsScreen from '../screens/Projects';
import ProjectsDetailScreen from '../screens/ProjectsDetail';

const UnbdoardingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="ProjectsDetail"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="ProjectsDetail" component={ProjectsDetailScreen} />
    </Stack.Navigator>
  );
};

export default UnbdoardingStack;
