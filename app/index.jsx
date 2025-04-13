import React, { useContext } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { DataContext } from '../contexts/DataContext'; // adjust path if needed

export default function HomeScreen() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
    

      <View style={styles.inputGroup}>
	<Text>edit here</Text>
       
      </View>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3f4f6',
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  inputGroup: {
    marginBottom: 20,
  }
});
