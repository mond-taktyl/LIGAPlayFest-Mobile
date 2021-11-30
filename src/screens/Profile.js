import React, {useEffect} from 'react';

import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

import Header from '../components/Header';
import Row from '../components/Row';
import AlertModal from '../components/modals/AlertModal';
import {Colors} from '../themes';

const Profile = ({navigation}) => {
  // const [isShow, setShow] = useState(false);
  const showComingSoon = () => {
    Alert.alert(
      '',
      'Feature coming soon!',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  };
  const checkBackHandler = () => {
    navigation.goBack()
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', checkBackHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', checkBackHandler);
    };
  }, [checkBackHandler]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <AlertModal isOpen={isShow} setClose={setShow} /> */}

      <Header navigation={navigation} goBack name="Profile" />
      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <View
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: Colors.snow,
            elevation: 1,
          }}>
          <View
            style={{
              backgroundColor: Colors.facebook,
              height: 80,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              width: '100%',
            }}
          />
          <View style={{top: -40, alignItems: 'center'}}>
            <Image
              style={{height: 110, width: 110}}
              source={require('../assets/images/profile-icon.png')}
              resizeMode="contain"
            />

            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Mond Del Rosario
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.frost,
                padding: 15,
                borderRadius: 20,
                marginVertical: 10,
              }}
              onPress={() => showComingSoon()}>
              <Text style={{fontWeight: 'bold'}}>92AD2H2992N2LL101029</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}
              onPress={() => showComingSoon()}>
              <Ionicons name="create-outline" size={25} />
              <Text>Edit Profile</Text>
            </TouchableOpacity>

            <Row left="Email" right="delrosarioraymond17@gmail.com" />
            <Row left="Gender" right="Male" />
            <Row left="Birthday" right="May 8, 1998" />
            <Row left="Location" right="Cavite" />
          </View>
        </View>
        <Button
          color={Colors.steel}
          title="Logout"
          onPress={() => navigation.navigate('Login')}></Button>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
