import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

import {
  Bubbles,
  Planet,
  Chat,
  Dollar,
  Heart,
  LevelUp,
} from '../../assets/images/';

import {style} from './style';
import Button from '../../components/Button';

const Introduction = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      img: Planet,
      text: 'Find Project from companies everywhere in the world',
    },
    {
      id: 2,
      img: Dollar,
      text: 'Make money while on working on awesome projects',
    },
    {
      id: 3,
      img: Chat,
      text: 'Chat with others freelancers and develop your network',
    },
    {
      id: 4,
      img: LevelUp,
      text: 'Work hard and level up!',
    },
    {
      id: 5,
      img: Heart,
      text: 'Enjoy your progress!',
      register: true,
    },
  ];

  return (
    <View style={style.container}>
      <ImageBackground source={Bubbles} style={style.imageBackground}>
        <Text style={style.companyTitle}>Spiice</Text>
        <Swiper
          loop={false}
          dotStyle={{marginBottom: 10}}
          activeDotStyle={{marginBottom: 10}}>
          {data.map((s) => (
            <View key={s.id}>
              <View style={style.slide}>
                <Image source={s.img} style={style.image} />
                <Text style={[style.text, s.register && {marginBottom: 100}]}>
                  {s.text}
                </Text>
                {s.register && (
                  <Button
                    title="Register"
                    styles={{marginBottom: 100, height: 50}}
                    onPress={() => navigation.navigate('Register')}
                  />
                )}
              </View>
            </View>
          ))}
        </Swiper>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
