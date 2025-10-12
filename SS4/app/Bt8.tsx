import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductItem: React.FC<{ product: Product; onAddToCart: (product: Product) => void }> = ({ product, onAddToCart }) => (
  <View style={styles.productItem}>
    <Text>{product.name} - {product.price.toLocaleString()} VND</Text>
    <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
      <Text style={styles.addButtonText}>Thêm vào giỏ</Text>
    </TouchableOpacity>
  </View>
);

const Bt8: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const products: Product[] = [
    { id: '1', name: 'iPhone 15 Pro', price: 25000000 },
    { id: '2', name: 'MacBook Air M3', price: 32000000 },
    { id: '3', name: 'Apple Watch Series 9', price: 11000000 },
    { id: '4', name: 'AirPods Pro 2', price: 6000000 },
  ];

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.cartText}>Số mặt hàng trong giỏ: {totalItems}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} onAddToCart={handleAddToCart} />}
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
  cartText: {
    fontSize: 16,
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
});

export default Bt8;