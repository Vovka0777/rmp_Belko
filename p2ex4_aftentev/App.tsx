import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Main, { Article } from "./components/Main";
import FullArticle from "./components/FullArticle";


export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Если статья выбрана — показываем FullArticle, иначе Main
  if (selectedArticle) {
    return (
      <FullArticle
        route={{ params: selectedArticle }}
        navigation={{ goBack: () => setSelectedArticle(null) }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Main
        navigation={{
          navigate: (_screenName: string, article: Article) =>
            setSelectedArticle(article),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
