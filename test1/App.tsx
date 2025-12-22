import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet, SafeAreaView, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
import UniversalItem, { EntityData, EntityType } from './components/UniversalItem'; // Убедись, что путь правильный

// Конфигурация всех запросов
const API_BASE = 'https://belko.planfix.com/rest';
const TOKEN = 'Bearer d8a3b99016a08269b81df157c9288040';

// Карта API: Название кнопки -> Параметры запроса
const API_MAP = [
  { label: 'Контакты', url: '/contact/list', type: 'contact', rootKey: 'contacts', fields: 'id,name,lastname,midname,email,mobilePhone' },
  { label: 'Проекты', url: '/project/list', type: 'project', rootKey: 'projects', fields: 'id,title,description,status' },
  { label: 'Сотрудники', url: '/user/list', type: 'user', rootKey: 'users', fields: 'id,name,lastname,midname,email,login' },
  { label: 'Справочники', url: '/handbook/list', type: 'handbook', rootKey: 'handbooks', fields: 'id,name,group' }, // Исправил URL на логичный для справочников
  { label: 'Процессы Задач', url: '/process/task', type: 'process', rootKey: 'processes', fields: 'id,name,isActive' }, // Проверь endpoint, возможно нужен /task/process/list
  { label: 'Процессы Контактов', url: '/process/contact', type: 'process', rootKey: 'processes', fields: 'id,name' },
  { label: 'Отчёты', url: '/report/list', type: 'report', rootKey: 'reports', fields: 'id,name,description' },
  { label: 'Объекты', url: '/object/list', type: 'object', rootKey: 'objects', fields: 'id,name' },
];

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<EntityData[]>([]);
  
  // Выбранная категория (по умолчанию Контакты - индекс 0)
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchCreateData = async () => {
    setLoading(true);
    setData([]); // Очищаем старые данные перед загрузкой

    const currentApi = API_MAP[selectedIndex];

    try {
        let body = {
          offset: 0,
          pageSize: 100,
          fields: currentApi.fields,
          // sourceId: '...' // Если нужен sourceId, раскомментируй
        };

        // Некоторые эндпоинты PlanFix (например get) требуют GET, списки обычно POST
        // Для упрощения используем POST как в твоем примере
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
  
      console.log(`Загрузка ${currentApi.label}:`, json); // Для отладки

      // PlanFix возвращает данные в разных ключах (contacts, projects, users...)
      // Мы берем ключ из конфига (rootKey)
      if (json && json[currentApi.rootKey]) {
        setData(json[currentApi.rootKey]);
      } else if (json && json.result === 'success' && Array.isArray(json.data)) {
         // Иногда данные лежат просто в .data
         setData(json.data);
      } else {
        console.warn('Непонятная структура ответа или пусто', json);
      }
  
    } catch (error) {
      console.error('Ошибка запроса:', error);
    } finally {
      setLoading(false);
    }
  };

  // Перезагружаем данные, когда меняется выбранная категория
  useEffect(() => {
    fetchCreateData();
  }, [selectedIndex]);
  
  const renderItem = ({item}: {item: EntityData}) => {
    // Передаем в компонент и данные, и ТИП (чтобы знать какие поля рисовать)
    return <UniversalItem item={item} type={API_MAP[selectedIndex].type as EntityType} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f4f7" />
      
      {/* Меню выбора категории */}
      <View style={styles.menuContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {API_MAP.map((api, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.menuButton, 
                selectedIndex === index && styles.menuButtonActive
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Text style={[
                styles.menuText, 
                selectedIndex === index && styles.menuTextActive
              ]}>
                {api.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4A90E2" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
          renderItem={renderItem} 
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>Нет данных для отображения</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7', 
  },
  menuContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  menuButtonActive: {
    backgroundColor: '#4A90E2',
  },
  menuText: {
    color: '#333',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
    paddingBottom: 40, 
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  }
});