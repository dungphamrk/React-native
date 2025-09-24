import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Bt6() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    'Học React Native Styling',
    'Làm bài tập về ScrollView',
    'Tìm hiểu về component Pressable',
    'Chuẩn bị cho dự án cuối kỳ',
    'Đọc sách chuyên ngành 30 phút',
  ]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc mới..."
          value={task}
          onChangeText={setTask}
        />
        <Pressable style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Thêm</Text>
        </Pressable>
      </View>

      {/* Danh sách công việc */}
      <ScrollView style={styles.scrollView}>
        {tasks.map((item, index) => (
          <View key={index} style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginLeft: 8,
    backgroundColor: '#007BFF',
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 10,
  },
  taskItem: {
    backgroundColor: '#f1f1f1',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});
