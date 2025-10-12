import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  name: `Sản phẩm ${i + 1}`,
  image: 'https://picsum.photos/200',
}));

const Bt6 = () => {
  const [numColumns, setNumColumns] = useState(2);
  const [itemSize, setItemSize] = useState(width / 2 - 16);

  const calculateLayout = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    let columns = 2; 
    if (screenWidth > screenHeight) {
      columns = 3;
    }
    if (screenWidth >= 768) {
      columns = 4;
    }

    setNumColumns(columns);
    setItemSize(screenWidth / columns - 16);
  };

  useEffect(() => {
    calculateLayout();
    const subscription = Dimensions.addEventListener('change', calculateLayout);
    return () => subscription.remove();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.card, { width: itemSize }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Trang chủ</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  list: {
    padding: 8,
  },
  card: {
    backgroundColor: '#f9f9f9',
    margin: 8,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Bt6;
