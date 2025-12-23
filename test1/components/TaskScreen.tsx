import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import TaskItem from './Main';

export default function TasksScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://belko.planfix.com/rest/task/list', {
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
      .then(j => setTasks(j.tasks || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          item={task}
          onPress={() => navigation.navigate('Details', { item: task })}
        />
      ))}
    </ScrollView>
  );
}
