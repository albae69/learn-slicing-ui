import React from 'react';
import {Text, View, Image} from 'react-native';

import BackButton from '../../components/BackButton';
import {style} from './style';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = ({route}) => {
  let d = route.params.data;
  return (
    <View style={style.container}>
      <BackButton />
      <View style={style.profileContainer}>
        <View style={style.profile}>
          <Image source={d.photo} style={style.photo} />
          <Text style={style.name}>{d.name}</Text>
        </View>
        <View style={style.option}>
          <Icons name="call" size={25} style={{marginRight: 10}} />
          <Icon name="dots-vertical" size={30} />
        </View>
      </View>
    </View>
  );
};

export default Chat;
