import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface TodoItemProps {
  item: string;
  onDelete: (note: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete }) => (
  <View style={styles.todoItem}>
    <Text>{item}</Text>
    <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item)}>
      <Text style={styles.deleteText}>Xóa</Text>
    </TouchableOpacity>
  </View>
);

const Bt6 = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes(prevNotes => [...prevNotes, note]);
      setNote('');
    }
  };

  const handleDeleteNote = (noteToDelete: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note !== noteToDelete));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Nhập ghi chú mới..."
      />
      <Button title="Thêm" onPress={handleAddNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <TodoItem item={item} onDelete={handleDeleteNote} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
  },
});

export default Bt6;