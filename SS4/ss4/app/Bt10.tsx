import React, { useState } from 'react';
import { View, TextInput, Switch, FlatList, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
}

const Bt10: React.FC = () => {
  const initialProducts: Product[] = [
    { id: '1', name: 'iPhone 15 Pro', price: 25000000, inStock: true, category: 'Điện thoại' },
    { id: '2', name: 'MacBook Air M3', price: 32000000, inStock: true, category: 'Máy tính' },
    { id: '3', name: 'AirPods Pro 2', price: 6000000, inStock: false, category: 'Phụ kiện' },
    { id: '4', name: 'Sony WH-1000XM5', price: 8000000, inStock: true, category: 'Tai nghe' },
  ];

  const [searchText, setSearchText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const categories = ['Tất cả', 'Điện thoại', 'Máy tính', 'Phụ kiện', 'Tai nghe'];

  const filteredProducts = initialProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStock = !isStockOnly || product.inStock;
    const matchesCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    return matchesSearch && matchesStock && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Tìm kiếm sản phẩm..."
      />
      <View style={styles.filterRow}>
        <Text>Chỉ hiển thị hàng còn trong kho</Text>
        <Switch value={isStockOnly} onValueChange={setIsStockOnly} />
      </View>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedCategory} onValueChange={setSelectedCategory}>
          {categories.map(category => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name} - {item.price.toLocaleString()} VND</Text>
            <Text style={item.inStock ? styles.inStock : styles.outOfStock}>
              {item.inStock ? 'Còn hàng' : 'Hết hàng'}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
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
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inStock: { color: 'green' },
  outOfStock: { color: 'red' },
});

export default Bt10;