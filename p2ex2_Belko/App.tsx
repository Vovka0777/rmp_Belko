import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/Header";
import List from "./components/Listitem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItem] = useState([
    { text: 'Купить молока', key: "1" },
    { text: 'Помыть машину', key: "2" },
    { text: 'Купить картошку', key: "3" },
    { text: 'Стать миллионером', key: "4" },
  ]);

  const addItem = (textFromComponent: string) => {
    const randomKey = Math.random().toString(36).substring(7);
    setListOfItem((list) => [
      { text: textFromComponent, key: randomKey },
      ...list
    ]);
  };

  const deleteItem = (keyForDelete: string) => {
    setListOfItem((list) => {
      return list.filter(item => item.key != keyForDelete);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) =>
            <List element={item} deleteItem={deleteItem} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});