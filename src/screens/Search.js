import React from 'react';

import {View, Text, Pressable} from 'react-native';
import Header from '../components/Header';

const Search = ({navigation}) => {
  return (
    <>
      <Header goBack navigation={navigation} />
      <View style={{flex: 1, alignItems: 'center', padding: 10}}>
        <Text>SEARCH</Text>
      </View>
    </>
  );
};
export default Search;
