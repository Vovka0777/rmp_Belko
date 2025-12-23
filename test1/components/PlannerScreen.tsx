import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import TaskItem from '../components/Main';

export default function ReportsScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    // 1. Изменен URL на report/list
    fetch('https://belko.planfix.com/rest/report/list', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer d8a3b99016a08269b81df157c9288040',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        offset: 0,
        pageSize: 20,
        sourceId: '797f5a94-3689-4ac8-82fd-d749511ea2b2',
        fields: 'id,name', // Обычно у отчетов тоже есть id и name
      }),
    })
      .then(r => r.json())
      .then(j => {
        // 2. Логируем ответ, чтобы проверить структуру (на случай ошибок)
        console.log('Reports response:', j); 
        // 3. Обычно API возвращает { reports: [...] }, поэтому меняем j.projects на j.reports
        setReports(j.reports || []); 
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;

  return (
    <ScrollView style={{ padding: 10 }}>
      {reports.map(report => (
        <TaskItem
          key={report.id}
          item={report}
          // При клике переходим в детали (возможно, понадобится отдельный экран ReportDetails)
          onPress={() => navigation.navigate('ReportDetails', { item: report })}
        />
      ))}
    </ScrollView>
  );
}