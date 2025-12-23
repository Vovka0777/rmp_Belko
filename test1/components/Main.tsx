import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function TaskItem({ item, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'dark-grey',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>
        {item.name || 'Элемент'}
      </Text>
    </TouchableOpacity>
  );
}