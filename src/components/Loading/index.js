import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = ({size, color, styles}) => {
  return (
    <View style={styles}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
