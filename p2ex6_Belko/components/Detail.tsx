import User from "./Main";
import { StyleSheet, Text, View } from "react-native";

type DetailProps = {
  navigation: any;
  route: any;
};

export default function Detail(props: DetailProps) {
  const routeUser: User = props.route.params;

  console.log("routeUser = ", routeUser);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>{routeUser.name}</Text>
      <Text>{routeUser.gender}</Text>
      <Text>{routeUser.email}</Text>
      <Text>{routeUser.id}</Text>
      <Text>{routeUser.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
