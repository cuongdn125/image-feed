import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Feed from './screens/Feed';


export default function App() {

  const handlePressLinkText = () => {
    console.log('Press link')
  }

  const items = [
    { id:0, author:'Bob Ross'},
    { id:1, author:'Chuck Norris'},
  ];

  return (
    <View>
      <View style={styles.statusBar} />
      <View style={styles.title} >
        <Text style={styles.text}>Image Feed</Text>
      </View>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: '#C2185B',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 30,
  }

});
