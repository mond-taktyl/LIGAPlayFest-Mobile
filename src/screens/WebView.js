import React from 'react';

import {SafeAreaView, } from 'react-native';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';

const RNWebView = ({navigation,route}) => {


const link = route.params.data ||{}
console.log("link : ",link)

  return (
    <SafeAreaView style={{flex:1}}>
      <Header goBack navigation={navigation}webView badges={{coins: 7, energy: 2}}/>
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
