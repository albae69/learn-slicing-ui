import React from 'react';
import {View, Text} from 'react-native';

import {style} from './style';
import BackButton from '../../components/BackButton';

const Projects = () => {
  return (
    <View>
      <BackButton />
      <Text>this is projects screen</Text>
    </View>
  );
};

export default Projects;
