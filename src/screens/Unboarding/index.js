import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import {style} from './style.js';
import bg from '../../assets/images/Bubbles.png';
import planet from '../../assets/images/Planet.png';
import chat from '../../assets/images/Chat.png';
import dollar from '../../assets/images/Dollar.png';
import heart from '../../assets/images/Heart.png';
import levelUp from '../../assets/images/LevelUp.png';

import {ScrollView} from 'react-native-gesture-handler';

const Introduction = () => {
  const data = [
    {
      id: 1,
      img: planet,
      text: 'Find Project from companies everywhere in the world',
    },
    {
      id: 2,
      img: dollar,
      text: 'Make money while on working on awesome projects',
    },
    {
      id: 3,
      img: chat,
      text: 'Chat with others freelancers and develop your network',
    },
    {
      id: 4,
      img: levelUp,
      text: 'Work hard and level up!',
    },
    {
      id: 5,
      img: heart,
      text: 'Enjoy your progress!',
    },
  ];

  const Slide = ({img, text}) => {
    return (
      <View style={style.slide}>
        <Image source={img} style={style.image} />
        <Text style={style.text}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.imageBackground}>
        <Text style={style.companyTitle}>Spiice</Text>
        <ScrollView horizontal decelerationRate="fast" pagingEnabled>
          {data.map((s) => (
            <View key={s.id}>
              <Slide img={s.img} text={s.text} />
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
