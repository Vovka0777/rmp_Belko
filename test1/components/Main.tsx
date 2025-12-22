import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Task = {
  id: string;
  name: string;
  description: string;
  midname?: string;
  lastname?: string;
  email?: string;
};

type TaskItemProps = {
  item: Task;
};

export default function TaskItem({ item }: TaskItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header} activeOpacity={0.7}>
        <Text style={styles.nameText}>
          {item.name}
        </Text>
        <Text style={styles.arrow}>{isExpanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.nameText}>
          <Text style={styles.descriptionText}>
            Id: {item.id}
          </Text>

          <Text style={styles.descriptionText}>
            Имя: {item.midname}
          </Text>
          <Text style={styles.descriptionText}>
            Фамилия: {item.lastname}
          </Text>

          <Text style={styles.descriptionText}>
            Email: {item.email} 
          </Text>

          <Text style={styles.descriptionText}>
            Описание: {item.description}
          </Text>
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
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1, 
    marginRight: 10,
  },
  arrow: {
    fontSize: 14,
    color: '#888',
  },
  detailsContainer: {
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  idText: {
    fontSize: 14,
    color: '#555',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace', 
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    color: 'black',
  },
});