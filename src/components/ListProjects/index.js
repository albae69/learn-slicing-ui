import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListProjects = ({style, img, totalTitle, totalNumber}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={style.listProject}>
      <View style={style.dropDown}>
        <Text style={style.totalTitle}>{totalTitle}</Text>
        <View style={style.wrapTotalNumber}>
          <Text style={style.totalNumber}>{totalNumber}</Text>
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            {show ? (
              <Icons name="chevron-up" color="#99879D" size={35} />
            ) : (
              <Icons name="chevron-down" color="#99879D" size={35} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {show ? (
        <View style={style.image}>
          <Image source={img} />
        </View>
      ) : null}
    </View>
  );
};

export default ListProjects;
