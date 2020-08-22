import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', marginTop: hp('15%')}}>
            You have an account? <Text style={{fontWeight: 'bold'}}>Login</Text>
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
