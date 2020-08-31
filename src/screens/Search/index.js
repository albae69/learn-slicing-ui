import React, {useState} from 'react';
import {View, Image, Text, TextInput, Pressable} from 'react-native';

import {Search as SearchIcon, Filter} from '../../assets/icons';
import {style} from './style';

import useStateContext from '../../store/useStateContext';

const Search = ({navigation}) => {
  const [text, setText] = useState('');

  const {state} = useStateContext();

  const searchData = state.searchData;

  const NewProject = ({
    photo,
    name,
    posted,
    title,
    desc,
    total,
    price,
    category,
  }) => {
    return (
      <View style={style.cardContainer}>
        <View style={style.wrapCard}>
          <View style={style.profileContainer}>
            <View style={style.wrapProfile}>
              <Image source={photo} style={style.profileImg} />
              <Text style={style.name}>{name}</Text>
            </View>
          </View>
          <View style={style.cardContent}>
            <Text style={style.time}>Posted {posted}</Text>
            <Text style={style.title}>{title}</Text>
            <Text style={style.descTitle}>Description</Text>
            <Text style={style.description}>{desc}</Text>
            <View style={style.payment}>
              <Text style={style.total}>{total} proportions</Text>
              <Text style={style.price}>${price}</Text>
            </View>
            <View style={style.categoryContainer}>
              {category.map((a, index) => (
                <View style={style.category} key={index}>
                  <Text style={style.categoryText}>{a}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.search}>Search</Text>
      <View style={style.textInputContainer}>
        <TextInput
          placeholder="Search.."
          style={style.textInput}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Image source={SearchIcon} style={style.searchIcon} />
      </View>
      <View style={style.filter}>
        <Image source={Filter} />
        <Text style={style.filterText}>Filters</Text>
      </View>
      {searchData.map((s) => (
        <View style={style.cardContainer} key={s.id}>
          <Pressable
            onPress={() =>
              navigation.navigate('SearchProjectDetail', {data: searchData})
            }>
            <NewProject {...s} />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default Search;
