import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../style/global';

export default function Card ({ title, content, mood, date, id }) {
  return(
    <View style={globalStyles.cardView}>
      <Text style={globalStyles.h2}>{title}</Text>
      <Text style={globalStyles.p}>{content}</Text>
      <Text style={globalStyles.p}>mood: {mood}</Text>
      <Text>date: {date} || key: {id}</Text>
    </View>
  );
}