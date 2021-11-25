import React, {useEffect} from 'react';

import {StatusBar, Text, Image, Dimensions, ActivityIndicator} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const {width} = Dimensions.get('screen');
const Splash = ({navigation, route}) => {
  useEffect(() => {
    // if (route.name === 'Splash') {
    setTimeout(() => {
        navigation.navigate('Login');
    }, 3000);
    // }
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <>
        <Image
          source={require('../assets/images/main_logo.png')}
          resizeMode="contain"
          style={{width: width - 80, height: 300}}
        />
        <ActivityIndicator size="large" color="orange" />

        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            padding: 10,
          }}>
          DEVELOPED BY TAKTYL STUDIOS INC.
        </Text>
      </>
    </SafeAreaView>
  );
};

export default Splash;
