import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Типизация пропсов
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type Props = {
  route: DetailScreenRouteProp;
};

export default function DetailScreen({ route }: Props) {
  const { item, type } = route.params;

  // Вспомогательная функция для отрисовки поля
  const renderField = (label: string, value?: string | number | boolean) => {
    if (value === undefined || value === null || value === '') return null;
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{String(value)}</Text>
      </View>
    );
  };

  // Логика выбора полей в зависимости от типа
  const renderDetails = () => {
    switch (type) {
      case 'contact':
      case 'user':
        return (
          <>
            {renderField('Фамилия', item.lastname)}
            {renderField('Имя', item.midname)}
            {renderField('Email', item.email)}
            {renderField('Телефон', item.mobilePhone)}
            {renderField('Логин', item.login)}
          </>
        );
      case 'project': 
        return (
          <>
             {renderField('Статус', item.status?.name || item.status)}
             {renderField('Описание', item.description)}
          </>
        );
      case 'process': 
        return (
          <>
            {renderField('Активен', item.isActive ? 'Да' : 'Нет')}
            {renderField('Тип', item.type)}
          </>
        );
      case 'handbook':
        return (
           <>
             {renderField('Группа', item.group)}
             {renderField('Описание', item.description)}
           </>
        );
      default:
        // Для всех остальных типов выводим описание, если есть
        return renderField('Описание', item.description);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>{item.name || item.title || 'Объект'}</Text>
        <View style={styles.divider} />
        
        {renderField('ID', item.id)}
        {renderDetails()}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f4f7', padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 10 },
  row: { marginBottom: 12 },
  label: { fontSize: 12, color: '#888', textTransform: 'uppercase', fontWeight: 'bold' },
  value: { fontSize: 16, color: '#333', marginTop: 2 },
});