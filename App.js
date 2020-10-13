import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './res/style/global';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text>Header</Text>
      
    </View>
  );
}
