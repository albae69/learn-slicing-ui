import React, {useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {Charts} from '../../assets/images/';
import {style} from './style.js';
import ProjectCards from '../../components/ProjectCards';

import useStateContext from '../../store/useStateContext';

const Home = ({navigation}) => {
  const {state} = useStateContext();
  const {project} = state;

  const scrollRef = useRef();

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
      <ScrollView contentContainerStyle={style.projectContainer}>
        {project.map((p) => (
          <Pressable
            key={p.id}
            onPress={() => {
              navigation.navigate('ProjectDetail', {
                data: p.data,
              });
            }}>
            <ProjectCards
              key={p.id}
              title={p.title}
              owner={p.owner}
              status={p.status}
              statusStyle={
                p.status === 'Active' ? {color: 'green'} : {color: 'orange'}
              }
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
