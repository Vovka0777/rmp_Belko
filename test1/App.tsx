import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TasksScreen from './components/TaskScreen';
import ContactsScreen from './components/ContactsScreen';
import PlannerScreen from './components/PlannerScreen';
import DetailsScreen from './components/DetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Задачи" component={TasksScreen} />
      <Drawer.Screen name="Контакты" component={ContactsScreen} />
      <Drawer.Screen name="Отчеты" component={PlannerScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={DrawerScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Детали' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
