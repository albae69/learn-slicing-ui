import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {style} from './style';

import useStateContext from '../../store/useStateContext';

const Chat = ({bg, name, newMessage, photo, id}) => {
  return (
    <View
      style={[
        style.chatContainer,
        {backgroundColor: bg ? 'white' : '#FAF9FE'},
      ]}>
      <TouchableOpacity onPress={() => Alert.alert(`${id}`, 'id ')}>
        <View style={style.chat}>
          <Image source={photo} style={style.photo} />
          <View style={style.wrapName}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.msg}>{newMessage}</Text>
          </View>
          <Icons
            name="chevron-right"
            color="#99879D"
            size={25}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Message = () => {
  const {state} = useStateContext();
  let messages = state.messages;

  const renderItem = ({item}) => (
    <Chat
      photo={item.photo}
      name={item.name}
      newMessage={item.newMessage}
      bg={item.read}
      id={item.id}
    />
  );

  return (
    <View style={style.container}>
      <Text style={style.title}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Message;
