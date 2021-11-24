// In App.js in a new project

import * as React from 'react';
import Navigation from './src/navigation';
import {ModalPortal} from 'react-native-modals';

function App() {
  return (
    <>
        <Navigation />
        <ModalPortal />

    </>
  );
}

export default App;
