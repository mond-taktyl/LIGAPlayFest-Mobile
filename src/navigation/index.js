import React, {useEffect, useState} from 'react';
// import LottieView from 'lottie-react-native';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Games from '../screens/Games';
import Shop from '../screens/Shop';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import WebView from '../screens/WebView';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {Colors} from '../themes';

enableScreens(false);

const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.facebook,
     
      }}>
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: tabInfo => (
            <Ionicons
              name="play-circle-outline"
              size={wp('7%')}
              color={tabInfo.color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: tabInfo => (
            <Ionicons
              name="cart-outline"
              size={wp('7%')}
              color={tabInfo.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const options = {
    gestureEnabled: false,
    headerBackTitleVisible: false,
    // cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
    // cardStyleInterpolator: CardStyleInterpolators,
    cardStyleInterpolator: ({current: {progress}}) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      };
    },
  };
  const authOptions = {
    gestureDirection: 'vertical',
    animationEnabled: true,
    headerBackTitleVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
  };
  const otherOptions = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  const webViewOptions = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
  };

  const profileOptions = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <StatusBar
        animated
        backgroundColor={Colors.facebook}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

          // cardStyleInterpolator:
          //   CardStyleInterpolators.forRevealFromBottomAndroid,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={() => webViewOptions}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => webViewOptions}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={() => webViewOptions}
        />

        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={() => options}
        />
        <Stack.Screen name="Games" component={Games} options={() => options} />
        <Stack.Screen name="Shop" component={Shop} options={() => options} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={() => otherOptions}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={() => otherOptions}
        />
        <Stack.Screen
          name="WebView"
          component={WebView}
          options={() => webViewOptions}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={() => profileOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
};


export default Navigation;
