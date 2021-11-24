import React from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Modal, ScaleAnimation, ModalContent} from 'react-native-modals';
import {Colors, Fonts} from '../../themes';

const LoadingModal = ({
  visible,
  status,
  text,
  description,
  onTouchOutside,
  disabled,
}) => {
  return (
    <>
      <Modal
        visible={visible}
        onTouchOutside={!disabled ? onTouchOutside : () => {}}
        modalAnimation={
          new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true, // optional
          })
        }>
        <ModalContent style={styles.modalPadding}>
          {status ? (
            <>
              <View style={{paddingHorizontal: 20}}>
                <Text style={styles.textStyle}>{text}</Text>
            
              </View>
            </>
          ) : (
            <ActivityIndicator color={Colors.amber} size="large" />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalPadding: {
    width: Dimensions.get('screen').width - 100,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  textStyle: {
    ...Fonts.style.h6,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
export default LoadingModal;
