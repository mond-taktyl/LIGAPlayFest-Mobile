import React, {useState} from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../themes';
import AlertModal from './modals/AlertModal';

const Header = ({main, navigation, goBack, badges, webView, name}) => {
  const [modalSearch, setModalSearch] = useState(false);

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
  return (
    <>
      {/* <AlertModal  isOpen={modalSearch} setClose={setModalSearch}/> */}
      <View
        style={{
          backgroundColor: main ? Colors.snow : Colors.facebook,
          width: '100%',
          height: 55,
          elevation: 2,
        }}>
        {main && (
          <>
            <TouchableOpacity
              style={{position: 'absolute', left: 15, top: 12}}
              onPress={() => navigation.navigate('Profile')}>
              <Ionicons name="person-circle-outline" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                left: 55,
                top: 15,
                flexWrap: 'wrap',
                width: 85,
                backgroundColor: Colors.cloud,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => showComingSoon()}>
              <>
                <Image
                  source={require('../assets/images/coin-icon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text>{badges.coins}</Text>
              </>
              <>
                <Image
                  source={require('../assets/images/energy-icon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text>{badges.energy}</Text>
              </>

              {/* <Ionicons name="chevron-back-outline" size={25} /> */}
              {/* <Ionicons name="chevron-back-outline" size={25} /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', right: 55, top: 15}}
              onPress={() => showComingSoon()}>
              <Ionicons name="search-outline" size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', right: 15, top: 15}}
              onPress={() => navigation.navigate('Notification')}>
              <Ionicons name="notifications-outline" size={25} />
            </TouchableOpacity>
          </>
        )}
        {goBack && (
          <TouchableOpacity
            style={{position: 'absolute', left: 15, top: 15}}
            hitSlop={{left: 15, top: 15, right: 15, bottom: 15}}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={25} color="#fff" />
          </TouchableOpacity>
        )}
        {name && (
          <View style={{position: 'absolute', left: 50, top: 15}}>
            <Text style={{color: '#fff', fontSize: 18}}>{name}</Text>
          </View>
        )}
        {webView && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                left: 50,
                top: 15,
                flexWrap: 'wrap',
                width: 150,
                marginRight: 10,
                backgroundColor: '#CCCC',
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <>
                <Image
                  source={require('../assets/images/coin-icon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text style={{textAlign: 'center', flex: 1}}>
                  {badges.coins}
                </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                left: 50,
                top: 15,
                flexWrap: 'wrap',
                width: 150,
                marginRight: 10,
                backgroundColor: '#CCCC',
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <>
                <Image
                  source={require('../assets/images/energy-icon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text style={{textAlign: 'center', flex: 1}}>
                  {badges.energy}
                </Text>
              </>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default Header;
