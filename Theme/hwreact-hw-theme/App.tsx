import React from 'react';
import MainScreen from './src/MainScreen.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from './src/themes/ThemeProvider.tsx';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <MainScreen />
        </GestureHandlerRootView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
