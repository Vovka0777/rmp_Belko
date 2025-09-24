import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
  Button,
} from "react-native";

type FormProps = {
 addItem: Function;
};
export default function Form(props: FormProps) {
  const [text, setValue] = useState("");

  const onChange = (textInComponent: string) => {
    setValue(textInComponent);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Введите занятие"
    value={text}
      />
        <Button title = "Добавить дело" color={"green"}
        onPress={() => {
          props.addItem(text);
          setValue("");
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical:30,
    marginHorizontal:"20%",
    width:"60%",
  },
});