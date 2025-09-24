import  React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type ListItemProp = {
    element: {text: string,key: string};
    deleteItem: Function;
}
export default function List(props:ListItemProp) {
  return (
    <TouchableHighlight style={styles.main}
     onPress={()=> props.deleteItem(props.element.key)}>
        <Text style={styles.textStyle}>
          {props.element.key} - {props.element.text}
        </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  main: {

height: 100,
backgroundColor: '#ceeb2eff',
borderWidth:1,
borderRadius:30,
margin:10,
justifyContent: "center",
 marginHorizontal:'20%',
 width:'60%',

  },
  textStyle:{
 fontSize: 18,
 color: 'black',
 fontFamily: "bold",
 textAlign: "center",
  }
});