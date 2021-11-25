import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import Button from '../components/Button';
import Modal from '../components/modals/Modal';
import AlertModal from '../components/modals/AlertModal';

import {Colors} from '../themes';
const {width} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const checkBackHandler = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', checkBackHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', checkBackHandler);
    };
  }, [checkBackHandler]);

  const onPressContinueAsGuest = () => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);

      navigation.navigate('Home');
    }, 1500);
  };
  const [showLoading, setShowLoading] = useState(false);
  const [isShow, setShow] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', paddingHorizontal: 30}}>
      <AlertModal isOpen={isShow} setClose={setShow} />
      <Modal disabled visible={showLoading} />
      <Image
        source={require('../assets/images/main_logo.png')}
        resizeMode="contain"
        style={{width: width - 80, height: 300}}
      />
    
        <Button color={Colors.amber} title="Login" type onPress={() => {}} semi/>
 
      <View style={{marginTop: 20, justifyContent: 'center', opacity: 0.5}}>
        <Text>
          Don't have an account?{' '}
          <Text style={{color: Colors.amber, paddingTop: 10}}>Sign Up</Text>
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 15,
          left: 0,
          right: 0,
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Button
          color={Colors.facebook}
          title="Login via Facebook"
          onPress={() => {}}
        />
        <Button
          color={Colors.danger}
          title="Login via Google"
          onPress={() => {}}
        />
        <TouchableOpacity
          style={{marginTop: 20}}
          hitSlop={{top: 10, left: 10, right: 10}}
          onPress={onPressContinueAsGuest}>
          <Text style={{color: Colors.coal}}>Continue as guest</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default Login;
