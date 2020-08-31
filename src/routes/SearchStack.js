import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Search from '../screens/Search';
import SearchProjectDetail from '../screens/SearchProjectDetail';

const SearchStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="SearchProjectDetail"
        component={SearchProjectDetail}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
