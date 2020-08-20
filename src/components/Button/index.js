import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import Loading from '../Loading';
import {style} from './style';

const Button = ({
  title,
  onPress,
  loading,
  styles,
  disabled,
  titleStyle,
  loadingStyle,
  activeOpacity,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[style.container, styles]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}>
        {loading ? (
          <View>
            <Loading size="large" color="white" styles={loadingStyle} />
          </View>
        ) : (
          <Text style={[style.title, titleStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Button;
