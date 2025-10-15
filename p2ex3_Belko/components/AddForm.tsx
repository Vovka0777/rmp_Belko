import React from "react";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Formik } from "formik";

type AddFormProps = {
  closeForm: Function;
  saveHandler: Function;
};

export default function AddForm(props: AddFormProps) {
  return (
    <View>
      <View style={{ alignSelf: "flex-end" }}>
        <AntDesign
          name="close-circle"
          size={32}
          color="red"
          onPress={() => props.closeForm()}
        />
      </View>
      <Formik
        onSubmit={(values) => {
          console.log(values);
          props.saveHandler(values);
        }}
        initialValues={{ name: "", anons: "", full: "", imageLink: "" }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              value={formikProps.values.name}
              placeholder="Введите название"
              onChangeText={formikProps.handleChange("name")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={formikProps.values.anons}
              placeholder="Введите анонс"
              onChangeText={formikProps.handleChange("anons")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={formikProps.values.full}
              placeholder="Введите полный текст статьи"
              multiline
              onChangeText={formikProps.handleChange("full")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={formikProps.values.imageLink}
              placeholder="Введите ссылку на картинку"
              onChangeText={formikProps.handleChange("imageLink")}
            ></TextInput>
            <Pressable
              onPress={formikProps.handleSubmit as () => void}
              style={styles.button}
            >
              <Text>Добавить статью</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: "silver",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "green",
    height: 40,
    width: "60%",
    marginLeft: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
  },
});
