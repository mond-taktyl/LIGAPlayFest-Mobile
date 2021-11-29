import React, {useState,useEffect} from 'react';
import {
  useWindowDimensions,
  ScrollView,
  Alert,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import Header from '../components/Header';
import ShopCard from '../components/ShopCard';
import {Colors} from '../themes';
// import AlertModal from '../components/modals/AlertModal';
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
const CreditTab = () => {
  const list = [
    {
      image: require('../assets/images/enjin.png'),
      title: 'GAMEWORKS TOKENS',
      description: 'GET IT HERE (56/100) left',
      amount: '800',
    },
    {
      image: require('../assets/images/steam.png'),
      title: 'STEAM CREDITS',
      description: 'GET IT HERE (56/100) left',
      amount: '1000',
    },
  ];
  // const [isShow, setShow] = useState(false);
  return (
    <>
      {/* <AlertModal isOpen={isShow} setClose={setShow} /> */}

      <ScrollView
        style={{flex: 1, backgroundColor: Colors.silver}}
        contentContainerStyle={{alignItems: 'center', padding: 20}}>
        {list.map(item => (
          <ShopCard item={item} creditTab onPress={() => showComingSoon()} />
        ))}
      </ScrollView>
    </>
  );
};

const CoinTab = ({navigation}) => {
  const list = [
    {
      // image: require('../assets/images/enjin.png'),
      color: Colors.amber,
      title: 'Tier 1 - 800 Coins ',
      description: 'Spend coins to buy vouchers',
      amount: '500',
    },
    {
      // image: require('../assets/images/steam.png'),
      color: Colors.amber,
      title: 'Tier 2 - 3200 Coins',
      description: 'Spend coins to buy vouchers',
      amount: '3200',
    },
  ];
  // const [isShow, setShow] = useState(false);

  return (
    <>
      {/* <AlertModal isOpen={isShow} setClose={setShow}/> */}

      <ScrollView
        style={{flex: 1, backgroundColor: Colors.silver}}
        contentContainerStyle={{alignItems: 'center', padding: 20}}>
        {list.map(item => (
          <ShopCard item={item} onPress={() => showComingSoon()} />
        ))}
      </ScrollView>
    </>
  );
};
const EnergyTab = ({navigation}) => {
  const list = [
    {
      // image: require('../assets/images/enjin.png'),
      color: Colors.facebook,
      title: 'Tier 1 - 10 Energy ',
      description: 'Use energy to play games!',
      amount: '50',
    },
    {
      // image: require('../assets/images/steam.png'),
      color: Colors.facebook,
      title: 'Tier 2 - 30 Energy',
      description: 'Use energy to play games!',
      amount: '100',
    },
  ];
  // const [isShow, setShow] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <AlertModal isOpen={isShow} setClose={setShow} /> */}

      <ScrollView
        style={{flex: 1, backgroundColor: Colors.silver}}
        contentContainerStyle={{alignItems: 'center', padding: 20}}>
        {list.map(item => (
          <ShopCard item={item} onPress={() => showComingSoon()} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <CreditTab />;
    case 'second':
      return <CoinTab />;
    case 'third':
      return <EnergyTab />;
  }
};

const Shop = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Credits'},
    {key: 'second', title: 'Coins'},
    {key: 'third', title: 'Energy'},
  ]);

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
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{height: 0, width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            inactiveColor={Colors.steel}
            activeColor={Colors.charcoal}
            indicatorStyle={{backgroundColor: Colors.amber, height: 5}}
            labelStyle={{
              color: Colors.cloud,
              fontSize: 11,
            }}
            pressColor={Colors.silver}
            style={{backgroundColor: Colors.snow, padding: 0}}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Shop;
