import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {style} from './style.js';
import bg from '../../assets/images/Bubbles.jpg';
import Button from '../../components/Button';

const Introduction = () => {
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.image}>
        <Text style={style.companyTitle}>Spiice</Text>
        <Button
          title="Discover the platform"
          onPress={() => console.log('gg')}
          activeOpacity={0.8}
        />
        <Text style={style.question}>
          You have an account? <Text style={{fontWeight: 'bold'}}>Login</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
