import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';


export type EntityType = 
  | 'contact' 
  | 'project' 
  | 'user' 
  | 'process' 
  | 'report' 
  | 'object' 
  | 'customfield' 
  | 'directory'
  | 'general';

export type EntityData = {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  lastname?: string;
  midname?: string;
  email?: string;
  mobilePhone?: string;
  isActive?: boolean;
  type?: string;
  dataType?: string;
  group?: string;
  [key: string]: any;
};

type ItemProps = {
  item: EntityData;
  type: EntityType;
};

export default function UniversalItem({ item, type }: ItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    // Убрали LayoutAnimation, просто переключаем стейт
    setIsExpanded(!isExpanded);
  };

  const renderField = (label: string, value?: string | number | boolean) => {
    if (value === undefined || value === null || value === '') return null;
    return (
      <Text style={styles.descriptionText}>
        <Text style={styles.label}>{label}: </Text> {String(value)}
      </Text>
    );
  };

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
      case 'customfield':
        return (
          <>
            {renderField('Тип данных', item.dataType)}
            {renderField('Системное', item.isSystem ? 'Да' : 'Нет')}
          </>
        );
      case 'directory':
      case 'object':
      case 'report':
      default:
        return (
          <>
             {renderField('Описание', item.description)}
             {renderField('Группа', item.group)}
          </>
        );
    }
  };

  const displayName = item.name || item.title || 'Без названия';

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header} activeOpacity={0.7}>
        <View style={{flex: 1}}>
            <Text style={styles.typeLabel}>{type.toUpperCase()}</Text>
            <Text style={styles.nameText}>{displayName}</Text>
        </View>
        <Text style={styles.arrow}>{isExpanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.detailsContainer}>
          <View style={styles.separator} />
          <Text style={styles.idText}>ID: {item.id}</Text>
          {renderDetails()}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeLabel: {
    fontSize: 10,
    color: '#4A90E2',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginRight: 10,
  },
  arrow: {
    fontSize: 14,
    color: '#888',
  },
  detailsContainer: {
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  idText: {
    fontSize: 12,
    color: '#aaa',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
    lineHeight: 20,
  },
});