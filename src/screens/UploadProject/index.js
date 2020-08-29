import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ToastAndroid,
} from 'react-native';

import {style} from './style';
import {Upload, Cancel} from '../../assets/icons/';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const ProjectsDetail = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  let data = route.params.data;

  const uploadFile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
      ToastAndroid.show('succesfuly send file!', ToastAndroid.SHORT);
    }, 1000);
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={style.containerProject}>
        {data.map((d) => (
          <View style={style.profile}>
            <Image source={d.photo} style={style.photo} />
            <Text style={style.name}>{d.name}</Text>
          </View>
        ))}
        <Text style={style.title}>Send your work</Text>
        <View style={style.message}>
          <TextInput
            placeholder="Message"
            multiline={true}
            numberOfLines={5}
            style={style.messageInput}
          />
        </View>
        <Pressable style={style.uploadFile}>
          <Text style={style.uploadPlaceholder}>Upload File</Text>
          <Image source={Upload} />
        </Pressable>
        <Pressable style={style.file}>
          <Text style={style.uploadPlaceholder}>wireframes.sketch</Text>
          <Image source={Cancel} />
        </Pressable>
      </View>
      <View style={style.btnWrap}>
        <Button
          title="Send"
          styles={style.btn}
          loading={loading}
          onPress={() => uploadFile()}
        />
      </View>
    </View>
  );
};

export default ProjectsDetail;
