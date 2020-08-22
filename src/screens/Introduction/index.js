import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {style} from './style.js';
import bg from '../../assets/images/Bubbles.png';
import Button from '../../components/Button';

const Introduction = ({navigation}) => {
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.image}>
        <Text style={style.companyTitle}>Spiice</Text>
        <Button
          title="Discover the platform"
          onPress={() => navigation.navigate('Unboarding')}
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
