import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import ProductModal from "../../components/ProductModal";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerTitleAlign: "left",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Trang chủ",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="product"
          options={{
            title: "Danh sách sản phẩm",
            tabBarLabel: "Sản phẩm",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                size={24}
                color={color}
              />
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={handleAdd}>
                <MaterialCommunityIcons
                  name="plus-circle-outline"
                  size={26}
                  color="#007AFF"
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: "Tài khoản",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <ProductModal visible={modalVisible} onClose={handleCloseModal} />
    </>
  );
}
