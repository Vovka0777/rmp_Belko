import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import TasksScreen from './components/TaskScreen';
import ContactsScreen from './components/ContactsScreen';
import PlannerScreen from './components/PlannerScreen';
import DetailsScreen from './components/DetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Тема для всего приложения (светлый фон)
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2F2F7', // Светло-серый фон как в iOS
  },
};

function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#4A90E2' }, // Синяя шапка
        headerTintColor: '#fff', // Белый текст
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#4A90E2', // Цвет активного пункта меню
        // Добавим иконки в меню
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Задачи') iconName = focused ? 'checkbox' : 'checkbox-outline';
          else if (route.name === 'Контакты') iconName = focused ? 'people' : 'people-outline';
          else if (route.name === 'Отчеты') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Задачи" component={TasksScreen} />
      <Drawer.Screen name="Контакты" component={ContactsScreen} />
      <Drawer.Screen name="Отчеты" component={PlannerScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={DrawerScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }: any) => ({ 
            title: route.params?.title || 'Детали', // Динамический заголовок
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#4A90E2',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}