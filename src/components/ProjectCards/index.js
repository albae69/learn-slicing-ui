import React from 'react';
import {View, Text} from 'react-native';

import {style} from './style';

const ProjectCards = ({title, owner, status}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={style.wrapStatus}>
        <Text>{owner}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default ProjectCards;
