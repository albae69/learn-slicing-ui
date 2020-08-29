import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {style} from './style';

const Search = () => {
  return (
    <View style={style.container}>
      <Text style={style.search}>Search</Text>
      <View style={style.textInputContainer}>
        <TextInput style={style.textInput} />
        <Icons
          name="search"
          size={30}
          style={{position: 'absolute', right: '8%'}}
        />
      </View>
    </View>
  );
};

export default Search;
