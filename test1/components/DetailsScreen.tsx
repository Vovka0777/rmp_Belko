import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }: any) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.headerCard}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{item.name?.[0]?.toUpperCase() || '?'}</Text>
        </View>
        <Text style={styles.headerTitle}>{item.name}</Text>
        <Text style={styles.headerId}>ID: {item.id}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Информация</Text>
        {Object.entries(item).map(([key, value]) => {
          if (key === 'name' || key === 'id') return null; // Не дублируем то, что уже в заголовке
          return (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}:</Text>
              <Text style={styles.value}>{String(value)}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E1E9F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  headerId: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  infoSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    color: '#666',
    fontSize: 15,
  },
  value: {
    color: '#333',
    fontWeight: '500',
    fontSize: 15,
    maxWidth: '60%',
    textAlign: 'right',
  },
});