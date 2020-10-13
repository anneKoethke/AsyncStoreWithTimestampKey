import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../style/global';

export default function Input({ title, setTitle, content, setContent, mood, setMood }) {
  return(
    <View style={globalStyles.innerContainer}>
      <Text style={globalStyles.h1}>Input</Text>
      <View style={globalStyles.firstInputRow}>
        <TextInput 
          style= {[globalStyles.input, globalStyles.titleInput]}
          onChangeText={val => setTitle(val)}
          placeholder='title'
          value={title}
        />
        <TextInput 
          style= {globalStyles.input}
          onChangeText={val => setMood(val)}
          placeholder='mood'
          keyboardType='numeric'
          value={mood}
        />
      </View>
      <View style={globalStyles.secondInputRow}>
        <TextInput 
          style= {globalStyles.input}
          onChangeText={val => setContent(val)}
          placeholder='content'
          value={content}
          multiline
        />
      </View>
    </View>
  )
}