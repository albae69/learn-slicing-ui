import React from 'react';
import {View, Text} from 'react-native';

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
      {listProject.map((arr) => (
        <View key={arr.id} style={style.wrapListProjects}>
          <ListProjects
            style={style}
            totalTitle={arr.totalTitle}
            totalNumber={arr.totalNumber}
            img={arr.img}
          />
        </View>
      ))}
    </View>
  );
};

export default Projects;
