import React from 'react';
import {View, Text, Image} from 'react-native';

import {Charts} from '../../assets/images/';
import {style} from './style.js';

import useStateContext from '../../store/useStateContext';

const Home = () => {
  const {state, dispatch} = useStateContext();

  return (
    <View style={style.container}>
      <Text style={style.feed}>Feed</Text>
      <Text style={style.resume}>Resume</Text>
      <Image source={Charts} style={style.charts} />
      <View style={style.listContainer}>
        <Text style={style.activeProject}>Active Projects</Text>
        <View style={style.viewBtn}>
          <Text style={style.viewText}>View All</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
