import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddForm from "./AddForm";

export type Article = {
  name: string;
  anons: string;
  full: string;
  imageLink: string;
  key: string;
};

type MainProps = {
  navigation: any;
};

export default function Main(props: MainProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Гугл",
      full: "Полный текст статьи про гугл",
      imageLink:
        "https://4pda.to/s/qirtlg4z0f5fI4QqDtK716f0z2bUself2Zz0OM1eP5sLrhGHcA64hZZxeHm6Sir.jpg",
      key: "1",
    },
    {
      name: "Apple",
      anons: "Эппл",
      full: "Полный текст статьи эппл",
      imageLink:
        "https://4pda.to/s/qirtd6KrwGnz0NHIB014sdD1ffbCuf0LsI7AwmvP.jpg",
      key: "2",
    },
    {
      name: "FaceBook",
      anons: "ФейсБук",
      full: "Полный текст статьи про фейсбук",
      imageLink:
        "https://4pda.to/s/qirtl2aKNhtI9D2mSvz15bxxsP8hNkoqQHoKAS8xYCk1KF2SJAphNx4OMwZ.jpg",
      key: "3",
    },
  ]);

  const loadScene = (item: Article) => {
    props.navigation.navigate("FullArticleScreen", item);
  };

  const addArticle = (article: Article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.main}>
      <Modal visible={modalVisible}>
        <AddForm
          closeForm={() => setModalVisible(false)}
          saveHandler={addArticle}
        />
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={32} color="green" />
      </Pressable>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => loadScene(item)}>
            <Image style={styles.imageStyle} source={{ uri: item.imageLink }} />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.anonsStyle}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    fontSize: 18,
  },
  nameStyle: {
    fontFamily: "mt-light",
    fontSize: 24,
  },
  anonsStyle: {
    fontFamily: "lora-it",
    fontSize: 18,
  },
  imageStyle: {
    height: 200,
    width: 400,
    borderRadius: 10,
    marginTop: 10,
  },
});
