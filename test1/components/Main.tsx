import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Используем встроенные иконки Expo

// Типы для пропсов, чтобы TypeScript не ругался
interface TaskItemProps {
  item: { id: string; name: string; [key: string]: any };
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap; // Имя иконки
  color?: string; // Акцентный цвет
}

export default function TaskItem({ item, onPress, iconName = 'document-text', color = '#4A90E2' }: TaskItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7} // Эффект нажатия
      style={styles.card}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons name={iconName} size={24} color="#fff" />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name || 'Без названия'}
        </Text>
        <Text style={styles.subtitle}>ID: {item.id}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16, // Отступы по бокам
    marginVertical: 8,    // Отступы сверху/снизу
    padding: 16,
    borderRadius: 16,     // Сильное закругление
    flexDirection: 'row',
    alignItems: 'center',
    // Тени для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Тени для Android
    elevation: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#1A1A1A',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  subtitle: {
    color: '#8E8E93',
    fontSize: 12,
  },
});