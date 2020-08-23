import React from 'react';
import {View, Text, Image} from 'react-native';

import {style} from './style';
import {Avatar} from '../../assets/images/';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const ProjectsDetail = () => {
  return (
    <View style={style.container}>
      <BackButton />
      <View style={style.notification}>
        <Text style={style.charge}>You are in charge of this project</Text>
        <Text style={style.deadline}>Deadline 28/03/2020</Text>
      </View>
      <View style={style.containerProject}>
        <View style={style.profile}>
          <Image source={Avatar} />
          <Text style={style.name}>Fransisco Fisher</Text>
        </View>
        <Text style={style.time}>Posted 8 day ago</Text>
        <Text style={style.title}>Wireframes</Text>
        <Text style={style.desc}>
          I need a designer for my new website. The project is just at the
          beginning and I need wireframes before I start coding the website. I
          only want wireframes and I don’t want prototype or UI design.
        </Text>
        <View style={style.wrapPayment}>
          <View style={style.categoryContainer}>
            <Text style={style.category}>WIREFRAME</Text>
          </View>
          <Text style={style.money}>$600</Text>
        </View>
      </View>
      <View style={style.btnWrap}>
        <Button title="Send your work" styles={style.btn} />
      </View>
    </View>
  );
};

export default ProjectsDetail;
