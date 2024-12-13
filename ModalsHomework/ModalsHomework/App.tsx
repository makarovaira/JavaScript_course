import React from 'react';
import MainScreen from './src/MainScreen.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainScreen />
    </GestureHandlerRootView>
  );
};

export default App;
