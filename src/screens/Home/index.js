import React from 'react';
import {View, Text} from 'react-native';

import {style} from './style.js';

import useStateContext from '../../store/useStateContext';

const Home = () => {
  const {state, dispatch} = useStateContext();

  return (
    <View style={style.container}>
      <Text>This is a homescreen</Text>
    </View>
  );
};

export default Home;
