import React from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native"; // импортируем ScrollView
import { Article } from "./Main";

type FullArticleProps = {
  navigation: any;
  route: any;
};

export default function FullArticle(props: FullArticleProps) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const itemFromParams: Article = props.route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Назад</Text>
      </Pressable>

      <ScrollView>
        <Text style={styles.nameStyle}>{itemFromParams.name}</Text>
        <Image
          style={styles.imageStyle}
          source={{ uri: itemFromParams.imageLink }}
        />
        <Text style={styles.anonsStyle}>{itemFromParams.anons}</Text>
        <View style={styles.fullTextContainerStyle}>
          <Text style={styles.fullTextStyle}>{itemFromParams.full}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9ff",
    padding: 16,
  },

  backButton: {
    marginBottom: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    backgroundColor: "#2c282eff",
    borderRadius: 20,
  },

  backButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },

  imageStyle: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },

  nameStyle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  anonsStyle: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 16,
  },

  fullTextContainerStyle: {
    flex: 1,
  },
  fullTextStyle: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});
