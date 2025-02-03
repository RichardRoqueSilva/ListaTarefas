import React from 'react';
import App from './app/index';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


export default function RootApp() {
  return (
        <NavigationContainer>
          <App />
          <Toast />
        </NavigationContainer>
  );
}