import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setGridMode, setListMode } from '../redux/slices/viewModeSlice'

export default function Home() {
  const dispatch = useDispatch()
  const isGrid = useSelector((state: RootState) => state.viewMode.isGrid)

  const data = [1, 2, 3, 4, 5, 6]

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.button, !isGrid && styles.activeButton]}
          onPress={() => dispatch(setListMode())}>
          <Text style={[styles.buttonText, !isGrid && styles.activeText]}>List mode</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isGrid && styles.activeButton]}
          onPress={() => dispatch(setGridMode())}>
          <Text style={[styles.buttonText, isGrid && styles.activeText]}>Grid mode</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        numColumns={isGrid ? 2 : 1}
        key={isGrid ? 'G' : 'L'} 
        renderItem={({ item }) => (
          <View style={[styles.item, isGrid && styles.itemGrid]}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  item: {
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemGrid: {
    flex: 0.48,
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
