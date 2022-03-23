import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions} from 'react-native';
import Header from './Components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
