import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductContextType {
  data: Product[];
  addProduct: (product: Omit<Product, "id">) => Promise<void>;
  editProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => void;
  reloadData: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_KEY = "PRODUCT_LIST";

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue) {
        setData(JSON.parse(jsonValue));
      } else {
        const initialData = [
          { id: "1", name: "iPhone 15", price: 25000000, quantity: 10 },
          { id: "2", name: "Samsung S24", price: 22000000, quantity: 8 },
          { id: "3", name: "Xiaomi 14", price: 15000000, quantity: 15 },
        ];
        setData(initialData);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      }
    } catch (e) {
      console.error("❌ Lỗi khi load sản phẩm:", e);
    }
  };

  const saveData = async (newData: Product[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error("❌ Lỗi khi lưu sản phẩm:", e);
    }
  };

  const addProduct = async (product: Omit<Product, "id">) => {
    const newId = (data.length + 1).toString();
    const newProduct = { id: newId, ...product };
    const newList = [...data, newProduct];
    setData(newList);
    await saveData(newList);
  };

  const editProduct = async (updatedProduct: Product) => {
    const newList = data.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setData(newList);
    await saveData(newList);
  };

  const deleteProduct = (id: string) => {
    // Deletion is performed immediately; UI should confirm before calling this
    handleDelete(id);
  };

  const handleDelete = async (id: string) => {
    const newList = data.filter((p) => p.id !== id);
    setData(newList);
    await saveData(newList);
  };

  return (
    <ProductContext.Provider
      value={{ data, addProduct, editProduct, deleteProduct, reloadData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct phải được dùng trong ProductProvider");
  }
  return context;
};
