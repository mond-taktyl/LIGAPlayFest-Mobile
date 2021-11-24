import React from 'react';

import {View, Text, Pressable} from 'react-native';
import { Colors } from '../themes';

const Button = ({color, title, type, onPress}) => {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            opacity:.5,
            width: pressed ? '93%' : '95%',
            height: pressed ? (type ? 60 : 50) : type ? 62 : 52,
            borderRadius: 18,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
            padding: type ? 20 : 10,
            borderRadius: type ? 20 : 4,
          },
        ]}>
        <Text style={{color: Colors.snow, fontSize: 16}}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
