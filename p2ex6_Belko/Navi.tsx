import React from "react";
import Main from "./components/Main";
import Detail from "./components/Detail";

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
            headerStyle: {
              backgroundColor: "#FFEFD5",
              height: 40,
              borderBottomWidth: 0,
            },
            headerTitleStyle: { fontFamily: "lora-bold", color: "#808080" },
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: "Информация о пользователе",
            animation: "slide_from_right",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FFEFD5",
              height: 40,
              borderBottomWidth: 0,
            },
            headerTitleStyle: { fontFamily: "lora-bold", color: "#808080" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
