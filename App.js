
import React from 'react';
import Home from './src/pages/Home'
import Header from './src/components/Header'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default function App() {


  return (
    <>
      <Header />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({

});


