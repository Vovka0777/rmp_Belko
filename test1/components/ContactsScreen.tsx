import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import TaskItem from './Main';

export default function ContactsScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://belko.planfix.com/rest/contact/list', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer d8a3b99016a08269b81df157c9288040',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        offset: 0,
        pageSize: 10,
        sourceId: '797f5a94-3689-4ac8-82fd-d749511ea2b2',
        fields: 'id,name',
      }),
    })
      .then(r => r.json())
      .then(j => setContacts(j.contacts || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView>
      {contacts.map(contact => (
        <TaskItem
  key={contact.id}
  item={contact}
  iconName="people"        // Иконка людей
  color="#34C759"          // Зеленый цвет
  onPress={() => navigation.navigate('Details', { item: contact, title: 'Контакт' })}
/>
      ))}
    </ScrollView>
  );
}
