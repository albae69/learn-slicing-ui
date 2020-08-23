import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {Bubbles} from '../../assets/images/';
import {style} from './style';

const SplashScreen = () => {
  return (
    <View style={style.container}>
      <ImageBackground source={Bubbles} style={style.image}>
        <Text style={style.companyTitle}>Spiice</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
