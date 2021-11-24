import React from 'react';

import {Dimensions, Text} from 'react-native';
import {Modal, ScaleAnimation, ModalContent} from 'react-native-modals';

const AlertModal = ({isOpen, setClose}) => {
  return (
    <Modal
      visible={isOpen}
      onTouchOutside={() => setClose(false)}
      modalAnimation={
        new ScaleAnimation({
          initialValue: 0, // optional
          useNativeDriver: true, // optional
        })
      }>
      <ModalContent
        style={{
          width: Dimensions.get('window').width / 2,
        }}>
        <Text style={{textAlign: 'center'}}>Feature coming soon!</Text>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
