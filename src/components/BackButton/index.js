import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {style} from './style';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={style.container}>
        <Icons name="arrow-left" size={25} color="#99879D" />
        <Text style={style.back}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
