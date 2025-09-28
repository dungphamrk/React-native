import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import UserInfoCard from '../components/UserInfoCard';

const users = [
  {
    name: 'Trần Văn An',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'tran.an@example.com',
  },
  {
    name: 'Lý Thị Bình',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    email: 'ly.binh@example.com',
  },
];

export default function BT1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <UserInfoCard
            name={item.name}
            avatarUrl={item.avatarUrl}
            email={item.email}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 16,
  },
});
