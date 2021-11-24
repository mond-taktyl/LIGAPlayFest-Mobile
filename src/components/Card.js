import React from 'react';

import {Pressable, View, Text, Image} from 'react-native';
import {Colors} from '../themes';

const Card = ({type, onPress, details,image}) => {
  return (
    <View
      style={{
        height: type ? 140 : 80,
        width: type ? '95%' : '88%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }}>
      <Pressable
        style={({pressed}) => [
          {
            width: pressed ? '94%' : '95%',
            height: pressed ? (type ? 142 : 78) : type ? 145 : 80,
            backgroundColor: 'white',
            borderRadius: 18,
            elevation: 2,
            flexDirection: type ? 'column' : 'row',
          },
        ]}
        onPress={onPress}>
        {/* {children} */}
        {type ? (
      
            <Image
              style={{
                width: type ? '100%' : 80,
                height: 100,
                backgroundColor: Colors.steel,
              }}
              source={image}
              borderTopRightRadius={18}
              borderTopLeftRadius={18}
              resizeMode="cover"
            />
  
        ) : (
          <View
            style={{
          padding:10
           
            }}
          >
          <Image
          style={{
            width: 60,
            height: 60,
            backgroundColor: Colors.steel,
          }}
          borderRadius={10}
          source={image}
      
          resizeMode="cover"
        />
        </View>
        )}
        <View
          style={{
            padding:10,
            flexDirection: type ? 'row' : 'column',
            justifyContent: type ? 'space-between' : 'flex-start',
          }}>
          <Text
            style={{
              fontWeight: type ? 'bold' : '500',
              paddingTop: type ? 5 : 0,
            }}>
            {details.title}
          </Text>
          <Text style={{paddingTop: 10}}>{details.description}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;
