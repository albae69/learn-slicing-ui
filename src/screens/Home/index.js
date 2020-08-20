import React from 'react';
import {View, Text} from 'react-native';

import {style} from './style.js';
import Button from '../../components/Button/';

import useStateContext from '../../store/useStateContext';
import {INCREMENT, DECREMENT} from '../../store/types';

const Home = () => {
  const {state, dispatch} = useStateContext();

  return (
    <View style={style.container}>
      <Text style={style.count}>Count: {state.count}</Text>
      <View style={style.buttonContainer}>
        <Button title="+" onPress={() => dispatch({type: INCREMENT})} />
        <Button
          title="-"
          onPress={() => dispatch({type: DECREMENT})}
          styles={style.btn}
        />
      </View>
    </View>
  );
};

export default Home;
