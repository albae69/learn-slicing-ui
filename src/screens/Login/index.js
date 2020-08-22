import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Button from '../../components/Button/';
import bg from '../../assets/images/Bubbles.png';
import {style} from './style';

import useStateContext from '../../store/useStateContext';
import {LOGIN} from '../../store/types';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {dispatch} = useStateContext();
  const passwordRef = useRef();

  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={style.imageBackground}>
        <Pressable style={style.form} onPress={() => Keyboard.dismiss()}>
          <Text style={style.login}>Login</Text>
          <Formik
            initialValues={{
              email: 'email@john.doe',
              password: 'blankblank',
            }}
            onSubmit={(values) => {
              setLoading(true);
              setTimeout(() => {
                dispatch({type: LOGIN});
              }, 1000);
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                  style={style.input}
                  placeholderTextColor="#99879D"
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
                  title="Sign-in"
                  styles={{height: 50, marginTop: 50}}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
            )}
          </Formik>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', marginTop: hp('15%')}}>
              You don't have an account?{' '}
              <Text style={{fontWeight: 'bold'}}>Register</Text>
            </Text>
          </Pressable>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Register;
