import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './res/style/global';

export default function App() {

  // list of all entries
  const [entries, setEntries] = useState([]);

  // one entry contains of user input (title, content, mood)... 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  // ...and auto-generated input (date, timestamp/id) with moment.js
  const [date, setDate] = useState("");
  const [id, setId] = useState(""); // a timestamp is unique enough within a single system

  // executed before 1st render: empty all, refill with data from asyncStore
  useEffect(() => {
    initialReset();
    getDataFromAsyncStore();
  }, [])

  // reset all data in App initially
  const initialReset = () => {
    // user inputs
    resetUserInput();
    // auto-generated
    resetAutoGeneratedInput();
  }

  // resets the InputFields: 
  // (1) inital loading the app and (2) if an entry is saved to asyncStore
  const resetUserInput = () => {
    setTitle("");
    setContent("");
    setMood("");
  }

  const resetAutoGeneratedInput = () => {
    setDate("");
    setId("");
    setEntries([]);
  }

  // refill all data in App with AsyncStorageData 
  const getDataFromAsyncStore = async () => {
    try {
      //
      console.log("RECIEVED data from asyncStore")
    } catch (e) {

    }
  }

  // save single entry to asyncStore (and update view)
  const saveEntryToStore = async () => {

  };

  // remove single entry from view (and asyncStore)
  const removeEntryFromView = async () => {

  };

  // get all keys in asyncStore
  const getAllKeysFromAsyncStore = async () => {

  };

  // clear all data in asyncStore 
  const clearAsyncStore = async () => {

  };

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text>Header</Text>
      
    </View>
  );
}
