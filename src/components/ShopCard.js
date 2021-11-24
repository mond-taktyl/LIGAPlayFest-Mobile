import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../themes';

const ShopCard = ({item, creditTab,onPress}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.snow,
        width: '100%',
        height: 220,
        borderRadius: 18,
        marginVertical: 10,
        elevation: 2,
      }}>
     
        {item.image?
      <Image
        style={{
          width: '100%',
          height: 150,
          backgroundColor: Colors.steel,
        }}
        resizeMode="cover"
        borderTopRightRadius={18}
        borderTopLeftRadius={18}
        source={item.image}
      />:   <View  style={{
        width: '100%',
        height: 150,
        backgroundColor: item.color,
        borderTopStartRadius:18,
        borderTopEndRadius:18
      }}>

      </View>
}
      {creditTab && (
        <>
          <TouchableOpacity style={{position: 'absolute', left: 10, top: 10}} onPress={onPress}>
            <MaterialCommunityIcons
              color={Colors.snow}
              name="ticket"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}} onPress={onPress}>
            <MaterialCommunityIcons
              color={Colors.snow}
              name="dots-vertical"
              size={30}
            />
          </TouchableOpacity>
        </>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: Colors.coal, paddingVertical: 5}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 10}}>{item.description}</Text>
        </View>
        <>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: Colors.amber,
              borderRadius: 20,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={onPress}>
            <Image
              source={require('../assets/images/coin-icon.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={{fontWeight: 'bold', color: Colors.coal}}>
              {item.amount}
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
};

export default ShopCard;
