import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProjectsScreen from '../screens/Projects';

const UnbdoardingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Projects"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
    </Stack.Navigator>
  );
};

export default UnbdoardingStack;
