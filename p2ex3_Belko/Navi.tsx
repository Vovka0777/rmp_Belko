import React from "react";
import Main from "./components/Main";
import FullArticle from "./components/FullArticle";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function perehod() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{
            title: "Главная",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#c9f29b", height: 60 },
            headerTitleStyle: { fontWeight: "400" },
          }}
        />
        <Stack.Screen
          name="FullArticleScreen"
          component={FullArticle}
          options={{
            title: "Полная статья",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#c9f29b", height: 60 },
            headerTitleStyle: { fontWeight: "400" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
