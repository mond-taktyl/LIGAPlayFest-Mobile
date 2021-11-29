import React, {useEffect} from 'react';

import {SafeAreaView, BackHandler} from 'react-native';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';

const RNWebView = ({navigation, route}) => {
  const link = route.params.data || {};
  console.log('link : ', link);
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
      <Header
        goBack
        navigation={navigation}
        webView
        badges={{coins: 7, energy: 2}}
      />
      <SafeAreaView style={{flex: 1}}>
        {/* <Text>{link}</Text> */}

        <WebView
          source={{uri: link}}
          androidHardwareAccelerationDisabled={true}
          scalesPageToFit={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEnabled={false}
          javaScriptEnabled={true}
          startInLoadingState
          originWhitelist={['*']}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default RNWebView;
