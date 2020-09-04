import React, {useState} from 'react';
import {View, Text, Image, TextInput, ToastAndroid} from 'react-native';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import {Arlene} from '../../assets/images';
import {style} from './style';

const MessageProportion = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  let data = route.params.data;

  const message = () => {
    ToastAndroid.show('message sended!', ToastAndroid.SHORT);
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={style.projectContainer}>
        {data.map((d) => (
          <View style={style.profile} key={d.id}>
            <Image source={d.photo} style={style.photo} />
            <Text style={style.name}>{d.name}</Text>
          </View>
        ))}
      </View>
      <Text style={style.name}>Make a Proposition</Text>
      <View style={style.messageBoxContainer}>
        <View style={style.messageBox}>
          <TextInput
            placeholder="Message"
            placeholderTextColor="#99879D"
            value={value}
            onChangeText={(text) => setValue(text)}
          />
        </View>
        <Button
          activeOpacity={0.8}
          title="Send"
          loading={loading}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigation.navigate('Search');
              message();
            }, 1000);
          }}
        />
      </View>
    </View>
  );
};

export default MessageProportion;
