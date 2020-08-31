import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Message from '../screens/Message';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
};

export default HomeStack;
