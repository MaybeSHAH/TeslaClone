import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import CarItem from './components/CarItem'
import CarList from './components/CarsList'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
    <CarList />


    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:0
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center'
  }
  
});
