import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UnboardingScreen from '../screens/Unboarding';
import IntroductionScreen from '../screens/Introduction';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const UnbdoardingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Introduction" component={IntroductionScreen} />
      <Stack.Screen name="Unboarding" component={UnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default UnbdoardingStack;
