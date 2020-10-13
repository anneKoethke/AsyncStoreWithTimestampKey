import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../style/global';

export default function Btn ({text, onPress}) {

  return(
    <TouchableOpacity 
      style={[globalStyles.innerContainer, globalStyles.btn]}
      onPress={onPress}>
      <Text style={globalStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}