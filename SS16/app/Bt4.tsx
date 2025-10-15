import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { toggleFavorite } from '../redux/slices/userSlice'

export default function FavoritesList() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.user.users)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List Favorites User</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userName}>UserName: {item.name}</Text>
            <View style={styles.favoriteRow}>
              <Text>Favorites: </Text>
              <TouchableOpacity onPress={() => dispatch(toggleFavorite(item.id))}>
                <Text style={styles.favoriteIcon}>
                  {item.isFavorite ? '❤️' : '❓'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userCard: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  favoriteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  favoriteIcon: {
    fontSize: 18,
  },
})
