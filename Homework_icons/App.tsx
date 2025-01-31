import React, {useEffect} from 'react';
import MainScreen from './src/MainScreen.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation.ts';
import {DeepLinking} from './src/navigation/DeepLinking.ts';
import {Linking} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name={'main'} component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
