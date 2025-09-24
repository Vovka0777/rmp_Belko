import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}> Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
paddingTop: 50,
height: 100,
backgroundColor: 'silver',
width: "100%",
  },
  text:{
 fontSize: 30,
 color: 'black',
fontWeight: '600',
 textAlign: "center",
  }
});