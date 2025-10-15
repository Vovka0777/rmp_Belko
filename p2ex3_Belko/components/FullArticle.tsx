import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Article from "./Main";

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
      <Image
        style={styles.imageStyle}
        source={{ uri: itemFromParams.imageLink }}
      />
      <Text style={styles.nameStyle}>{itemFromParams.name}</Text>
      <Text style={styles.anonsStyle}>{itemFromParams.anons}</Text>
      <View style={styles.fullTextContainerStyle}>
        <Text style={styles.fullTextStyle}>{itemFromParams.full}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    //justifyContent: "center",
  },
  fullTextContainerStyle: {
    alignSelf: "flex-start",
  },
  nameStyle: {
    fontFamily: "mt-bold",
    fontSize: 24,
    margin: 15,
  },
  anonsStyle: {
    fontFamily: "lora-it",
    margin: 15,
  },
  fullTextStyle: {
    fontFamily: "lora-bold",
    margin: 15,
  },
  imageStyle: {
    height: 200,
    width: 400,
    borderRadius: 10,
    marginTop: 10,
  },
});
