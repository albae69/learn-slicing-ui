import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import bg from '../../assets/images/Bubbles.png';
import {style} from './style';

const SplashScreen = () => {
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.image}>
        <Text style={style.companyTitle}>Spiice</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
