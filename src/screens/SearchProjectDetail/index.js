import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import BackButton from './../../components/BackButton/';
import Button from './../../components/Button/';
import {style} from './style';

const SearchProjectDetail = ({navigation, route}) => {
  let data = route.params.data;
  console.log(data);
  return (
    <View style={style.container}>
      <BackButton />
      {data.map((d) => (
        <View key={d.id} style={style.wrapContainer}>
          <View style={style.wrapProfile}>
            <Image source={d.photo} style={style.profileImg} />
            <Text style={style.name}>{d.name}</Text>
          </View>
          <Text style={style.time}>Posted {d.posted}</Text>
          <Text style={style.title}>{d.title}</Text>
          <Text style={style.description}>{d.desc}</Text>
          <Text style={style.description}>{d.subDesc}</Text>
          <View style={style.payment}>
            <Text style={style.total}>{d.total} proportions</Text>
            <Text style={style.price}>${d.price}</Text>
          </View>
          <View style={style.categoryContainer}>
            {d.category.map((a, index) => (
              <View style={style.category} key={index}>
                <Text style={style.categoryText}>{a}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
      <View style={style.btn}>
        <Button
          title="Make a proportion"
          onPress={() =>
            Alert.alert(
              'mau buat proporsi?',
              'kamu mau buat proporsi buat si anu?',
            )
          }
        />
      </View>
    </View>
  );
};

export default SearchProjectDetail;
