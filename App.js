import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screen/splash/splashScreen'

import Home from './screen/homeScreen';

import Profile from './screen/profileScreen';
import Stacknavigator from './navigator/stacknavigator';
import { useState } from 'react';



export default function App() {
  const [status,setStatus]=useState(false);
  return (
    <NavigationContainer>
    
    {/* <Stacknavigator/> */}
    {/* <SplashScreen /> */}
    {!status ? <SplashScreen setStatus={setStatus}/> : <Stacknavigator/> }
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

