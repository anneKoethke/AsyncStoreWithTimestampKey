import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from './res/style/global';
import Input from './res/components/input';
import Btn from './res/components/btn';
import Card from './res/components/card';

export default function App() {

  // list of all entries
  const [entries, setEntries] = useState([]);

  // one entry contains of user input (title, content, mood)... 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  // ...and auto-generated input (date, timestamp/key) with moment.js
  const [date, setDate] = useState("");
  const [key, setKey] = useState(""); // a timestamp is unique enough within a single system

  // executed before 1st render: empty all, refill with data from asyncStore
  useEffect(() => {
    initialReset();
    getDataFromAsyncStore();
  }, [])

  // reset all (user's and auto-gen) data shown in App initially
  const initialReset = () => {
    resetUserInput();
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
    setKey("");
    setEntries([
      { title: "1st entry", content: "Blablabla", mood: "3", date: "2020-10-13", key:"1234567890" },
      { title: "2nd entry", content: "Blablabla", mood: "3", date: "2020-10-13", key:"1234567891" },
      { title: "3rd entry", content: "Blablabla", mood: "3", date: "2020-10-13", key:"1234567892" },
      { title: "4th entry", content: "Blablabla", mood: "3", date: "2020-10-13", key:"1234567893" }
    ]);
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
    console.log('Saved');
  };

  // remove single entry from view (and asyncStore)
  const removeEntryFromView = async () => {

  };

  // get all keys in asyncStore
  const getAllKeysFromAsyncStore = async () => {
    console.log('get all');
  };

  // clear all data in asyncStore 
  const clearAsyncStore = async () => {
    console.log('remove all');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar style="auto" />
      
      <Text style={globalStyles.titleText}>AsyncStorge with Timestamps as Keys</Text>

      <Input 
        title={title} setTitle={setTitle}
        content={content} setContent={setContent}
        mood={mood} setMood={setMood}
      />

      <Btn text='save' onPress={saveEntryToStore} />
        
      <View style={globalStyles.innerContainer}>
        <Text style={globalStyles.h1}>Output</Text>
        <FlatList 
          style={globalStyles.flatlist}
          data={entries}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => removeEntryFromView(item.key)}>
              <Card 
                title={item.title} content={item.content} mood={item.mood} 
                date={item.date} id={item.key}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={globalStyles.bottomRow}>
        <Btn text='get all keys' onPress={getAllKeysFromAsyncStore} />
        <Btn text='remove all data' onPress={clearAsyncStore} />
      </View>
    </SafeAreaView>
  );
}
