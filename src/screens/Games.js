import React, {useEffect} from 'react';

import {ScrollView, SafeAreaView, BackHandler} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import {Colors} from '../themes';

const Games = ({navigation}) => {
  const list = [
    {
      link: 'https://files.taktylstudios.com/projects/ff/juggle/0.0.9/',
      image: require('../assets/banners/catsdogs-banner.png'),
      type: true,
      details: {
        title: 'GAME OF THE DAY',
        description: '',
      },
    },
    {
      link: 'https://files.taktylstudios.com/projects/ff/slide/0.0.1/',
      image: require('../assets/banners/slide-banner.png'),
      type: true,
      details: {
        title: "TOMORROW'S TOURNAMENT",
        description: '',
      },
    },
    {
      link: 'https://files.taktylstudios.com/projects/ff/juggle/0.0.9/',
      image: require('../assets/banners/catsdogs-icon.png'),
      details: {
        title: 'CATS AND DOGS',
        description: 'Cats & Dogs Game',
      },
    },
    {
      link: 'https://files.taktylstudios.com/projects/ff/trivia/0.0.4/',
      image: require('../assets/banners/trivia-icon.png'),
      details: {
        title: 'READY,SET,SAGOT',
        description: 'Trivia Game',
      },
    },
    {
      link: 'https://files.taktylstudios.com/projects/ff/slide/0.0.1/',
      image: require('../assets/banners/slide-icon.png'),
      details: {
        title: 'SLIDE MASTERPIECE',
        description: 'Puzzle Game',
      },
    },
  ];
  const checkBackHandler = () => {
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
      <Header main badges={{coins: 1, energy: 5}} navigation={navigation} />
      <ScrollView
        style={{backgroundColor: Colors.silver, flex: 1}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
        {list.map((l, i) => (
          <Card
            onPress={() =>
              navigation.navigate('WebView', {
                data: l.link,
              })
            }
            image={l.image}
            type={l.type}
            details={l.details}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Games;
