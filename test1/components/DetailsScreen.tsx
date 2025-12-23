import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function DetailsScreen({ route }: any) {
  const { item } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      {Object.entries(item).map(([key, value]) => (
        <Text key={key}>
          {key}: {String(value)}
        </Text>
      ))}
    </ScrollView>
  );
}
