import React from 'react';

import {View, Text} from 'react-native';

const Row = ({left, right}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <View style={{flex:1}}>
        <Text style={{textAlign:"left",paddingLeft:30}}>{left}</Text>
      </View>
      <View style={{width:"50%"}}>
        <Text  >{right}</Text>
      </View>
    </View>
  );
};

export default Row;
