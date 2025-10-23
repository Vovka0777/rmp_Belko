import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";

export type User = {
  name: string;
  email: string;
  id: string;
  gender: string;
  status?: string;
};

type MainProps = {
  navigation: any;
};

export default function Main(props: MainProps) {
  const inititalValues: User[] = [
    { name: "Ivanov", email: "q1@q.ru", id: "1", gender: "Male" },
    { name: "Petrov", email: "q2@q.ru", id: "2", gender: "Male" },
    { name: "Sidorov", email: "q3@q.ru", id: "3", gender: "Male" },
  ];

  const [dataInState, setData] = useState(inititalValues);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = async () => {
    try {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  function renderItemForFlatList(item: User) {
    return (
      <Pressable
        style={styles.item}
        onPress={() => {
          openDetail(item);
        }}
      >
        <Text style={styles.itemName}>{item.name}</Text>
      </Pressable>
    );
  }

  const loadingJSX = <ActivityIndicator />;

  const openDetail = (item: User) => {
    props.navigation.navigate("DetailScreen", item);
  };

  const returnJSX = (
    <View style={styles.container}>
      <FlatList
        data={dataInState}
        renderItem={({ item }) => renderItemForFlatList(item)}
      />
    </View>
  );

  return isLoading ? loadingJSX : returnJSX;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    marginLeft: "5%",
    marginTop: 10,
    backgroundColor: "#FFEFD5",
    width: "90%",
    height: 50,
    padding: 10,
  },
  itemName: {
    fontSize: 20,
  },
});
