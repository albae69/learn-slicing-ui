import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Charts} from '../../assets/images/';
import {style} from './style.js';
import ProjectCards from '../../components/ProjectCards';

import useStateContext from '../../store/useStateContext';

const Home = ({navigation}) => {
  const {state} = useStateContext();
  const project = state.project;
  return (
    <View style={style.container}>
      <Text style={style.feed}>Feed</Text>
      <Text style={style.resume}>Resume</Text>
      <Image source={Charts} style={style.charts} />
      <View style={style.listContainer}>
        <Text style={style.activeProject}>Active Projects</Text>
        <TouchableOpacity
          style={style.viewBtn}
          onPress={() => navigation.navigate('Projects')}>
          <Text style={style.viewText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={style.projectContainer}>
        {project.map((p) => (
          <ProjectCards title={p.title} owner={p.owner} status={p.status} />
        ))}
      </View>
    </View>
  );
};

export default Home;
