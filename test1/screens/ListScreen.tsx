import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// Убедитесь, что путь к App правильный. Если App.tsx в корне, то '../App' верно.
import { RootStackParamList } from '../types';

// Конфигурация API
const API_BASE = 'https://belko.planfix.com/rest';
const TOKEN = 'Bearer d8a3b99016a08269b81df157c9288040';

export const API_MAP = [
  { label: 'Контакты', url: '/contact/list', type: 'contact', rootKey: 'contacts', fields: 'id,name,lastname,midname,email,mobilePhone' },
  { label: 'Проекты', url: '/project/list', type: 'project', rootKey: 'projects', fields: 'id,title,description,status' },
  { label: 'Сотрудники', url: '/user/list', type: 'user', rootKey: 'users', fields: 'id,name,lastname,midname,email,login' },
  { label: 'Справочники', url: '/handbook/list', type: 'handbook', rootKey: 'handbooks', fields: 'id,name,group' },
  { label: 'Процессы Задач', url: '/process/task', type: 'process', rootKey: 'processes', fields: 'id,name,isActive' },
  { label: 'Процессы Контактов', url: '/process/contact', type: 'process', rootKey: 'processes', fields: 'id,name' },
  { label: 'Отчёты', url: '/report/list', type: 'report', rootKey: 'reports', fields: 'id,name,description' },
  { label: 'Объекты', url: '/object/list', type: 'object', rootKey: 'objects', fields: 'id,name' },
];

export default function ListScreen({ route }: any) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  
  // Типизируем навигацию, чтобы работало .navigate('Detail')
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  // Получаем индекс API, переданный через initialParams в App.tsx
  // Если параметр не передан, по умолчанию открываем 0 (Контакты)
  const apiIndex = route.params?.apiIndex ?? 0;
  const currentApi = API_MAP[apiIndex];

  const fetchData = async () => {
    setLoading(true);
    try {
        let body = {
          offset: 0,
          pageSize: 100,
          fields: currentApi.fields,
        };

        let initParams = {
          method: 'POST',
          headers: {
            Authorization: TOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        };
      
      const response = await fetch(`${API_BASE}${currentApi.url}`, initParams);
      const json = await response.json();
  
      if (json && json[currentApi.rootKey]) {
        setData(json[currentApi.rootKey]);
      } else if (json && json.result === 'success' && Array.isArray(json.data)) {
         setData(json.data);
      } else {
         setData([]);
         console.log('Пустой ответ или ошибка структуры:', json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Загружаем данные при монтировании или смене apiIndex
  useEffect(() => {
    fetchData();
  }, [apiIndex]);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.card}
      // При нажатии переходим на экран Detail и передаем данные объекта и его тип
      onPress={() => navigation.navigate('Detail', { item, type: currentApi.type })}
    >
      <Text style={styles.title}>{item.name || item.title || 'Без названия'}</Text>
      <Text style={styles.subtitle}>ID: {item.id}</Text>
      <Text style={styles.hint}>Подробнее ➔</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4A90E2" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>Нет данных</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7' },
  listContent: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Тень для Android
    shadowColor: '#000', // Тень для iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  hint: { fontSize: 12, color: '#4A90E2', marginTop: 8, textAlign: 'right' },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#888' }
});