import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';

import Button from '../../components/Button/';
import bg from '../../assets/images/Bubbles.png';
import {style} from './style';

const Register = ({navigation}) => {
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.imageBackground}>
        <View style={style.form}>
          <Text style={style.signUp}>Sign-Up</Text>
          <Formik
            initialValues={{
              firstName: 'John',
              lastName: 'Doe',
              email: 'email@john.doe',
              password: 'blankblank',
            }}
            onSubmit={(values) => navigation.navigate('Login')}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  placeholder="First Name"
                  style={style.input}
                  placeholderTextColor="#99879D"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    lastNameRef.current.focus();
                    Keyboard.addListener();
                  }}
                  blurOnSubmit={false}
                />
                <TextInput
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  placeholder="Last Name"
                  style={style.input}
                  placeholderTextColor="#99879D"
                  ref={lastNameRef}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    emailRef.current.focus();
                    Keyboard.addListener();
                  }}
                  blurOnSubmit={false}
                />
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                  style={style.input}
                  placeholderTextColor="#99879D"
                  ref={emailRef}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                    Keyboard.addListener();
                  }}
                  blurOnSubmit={false}
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                  style={style.input}
                  placeholderTextColor="#99879D"
                  secureTextEntry={true}
                  ref={passwordRef}
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
      </ImageBackground>
    </View>
  );
};

export default Register;
