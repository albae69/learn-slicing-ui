import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';

import Button from '../../components/Button';
import {style} from './style.js';
import bg from '../../assets/images/Bubbles.png';
import planet from '../../assets/images/Planet.png';
import chat from '../../assets/images/Chat.png';
import dollar from '../../assets/images/Dollar.png';
import heart from '../../assets/images/Heart.png';
import levelUp from '../../assets/images/LevelUp.png';

const Introduction = ({navigation}) => {
  const data = [
    // {
    //   id: 1,
    //   img: planet,
    //   text: 'Find Project from companies everywhere in the world',
    // },
    // {
    //   id: 2,
    //   img: dollar,
    //   text: 'Make money while on working on awesome projects',
    // },
    // {
    //   id: 3,
    //   img: chat,
    //   text: 'Chat with others freelancers and develop your network',
    // },
    // {
    //   id: 4,
    //   img: levelUp,
    //   text: 'Work hard and level up!',
    // },
    // {
    //   id: 5,
    //   img: heart,
    //   text: 'Enjoy your progress!',
    // },
    {
      id: 6,
      signUp: true,
    },
  ];

  const Slide = ({img, text, signUp}) => {
    return (
      <>
        {signUp ? (
          <View style={style.slide}>
            <View style={style.form}>
              <Text style={style.signUp}>Sign-Up</Text>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                }}
                onSubmit={(values) => console.log(values)}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <View>
                    <TextInput
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                      placeholder="First Name"
                      style={style.input}
                      placeholderTextColor="#99879D"
                    />
                    <TextInput
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                      placeholder="Last Name"
                      style={style.input}
                      placeholderTextColor="#99879D"
                    />
                    <TextInput
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Email"
                      style={style.input}
                      placeholderTextColor="#99879D"
                    />
                    <TextInput
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder="Password"
                      style={style.input}
                      placeholderTextColor="#99879D"
                      secureTextEntry={true}
                    />
                    <Button
                      title="Sign-up"
                      styles={{height: 50}}
                      onPress={handleSubmit}
                    />
                  </View>
                )}
              </Formik>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={{textAlign: 'center'}}>
                  You have an account?{' '}
                  <Text style={{fontWeight: 'bold'}}>Login</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={style.slide}>
            <Image source={img} style={style.image} />
            <Text style={style.text}>{text}</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.imageBackground}>
        <Text style={style.companyTitle}>Spiice</Text>
        <ScrollView horizontal decelerationRate="fast" pagingEnabled>
          {data.map((s) => (
            <View key={s.id}>
              <Slide img={s.img} text={s.text} signUp={s.signUp} />
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
