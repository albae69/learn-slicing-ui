import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {style} from './style';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const ProjectDetail = ({route}) => {
  const data = route.params.data;
  return (
    <View style={style.container}>
      <BackButton />
      {data.map((b) => (
        <React.Fragment key={b.id}>
          <View style={style.notification}>
            <Text style={style.charge}>You are in charge of this project</Text>
            <Text style={style.deadline}>Deadline {b.deadline}</Text>
          </View>
          <View style={style.containerProject}>
            <View style={style.profile}>
              <Image source={b.photo} />
              <Text style={style.name}>{b.name}</Text>
            </View>
            <Text style={style.time}>Posted {b.posted}</Text>
            <Text style={style.title}>{b.title}</Text>
            <Text style={style.desc}>{b.desc}</Text>
          </View>
          <View style={style.wrapPayment}>
            {b.category.map((s) => (
              <View key={s.id} style={style.containerCategory}>
                <Text>{s.category.toUpperCase()}</Text>
              </View>
            ))}
            <Text style={style.money}>{b.price}</Text>
          </View>
          <View style={style.btnWrap}>
            <Button title="Send your work" styles={style.btn} />
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

export default ProjectDetail;
