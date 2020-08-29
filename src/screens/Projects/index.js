import React from 'react';
import {View, Text, Animated} from 'react-native';

import {style} from './style';
import BackButton from '../../components/BackButton';
import ListProjects from '../../components/ListProjects';

import useStateContext from '../../store/useStateContext';

const Projects = () => {
  const {state} = useStateContext();
  const listProject = state.listProject;

  return (
    <View style={style.container}>
      <BackButton />
      <Text style={style.details}>DETAILS</Text>
      <View style={style.wrapListProjects}>
        {listProject.map((arr) => (
          <Animated.View key={arr.id}>
            <ListProjects
              style={style}
              totalTitle={arr.totalTitle}
              totalNumber={arr.totalNumber}
              img={arr.img}
            />
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default Projects;
