import React, {useState} from 'react';

import {ScrollView,Alert,SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import AlertModal from '../components/modals/AlertModal';
const Notification = ({navigation}) => {
  const list = [
    {
      link: 'http://files.taktylstudios.com/projects/ff/juggle/0.0.9/',
      image: require('../assets/banners/catsdogs-icon.png'),

      details: {
        title: 'CATS AND DOGS',
        description: 'Cats & Dogs Game',
      },
    },
    {
      link: 'http://files.taktylstudios.com/projects/ff/trivia/0.0.4/',
      image: require('../assets/banners/trivia-icon.png'),
      details: {
        title: 'READY,SET,SAGOT',
        description: 'Trivia Game',
      },
    },
    {
      link: 'http://files.taktylstudios.com/projects/ff/slide/0.0.1/',
      image: require('../assets/banners/slide-icon.png'),

      details: {
        title: 'SLIDE MASTERPIECE',
        description: 'Puzzle Game',
      },
    },
  ];
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
  // const [isShow, setShow] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <AlertModal isOpen={isShow} setClose={setShow} /> */}

      <Header
        goBack
        badges={{coins: 1, energy: 5}}
        navigation={navigation}
        name="Notifications"
      />
      <ScrollView
        style={{backgroundColor: '#fff', flex: 1}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 10}}>
        {list.map((l, i) => (
          <Card
            onPress={() => showComingSoon()}
            image={l.image}
            details={l.details}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Notification;
