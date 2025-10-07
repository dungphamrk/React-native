import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import ProductModal from "../../components/ProductModal";
import { useToast } from "../../components/Toast";
import {
  Product as ProductType,
  useProduct,
} from "../../context/ProductContext";

export default function ProductList() {
  const { data, deleteProduct } = useProduct();
  const toast = useToast();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(
    null
  );
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<ProductType | null>(null);

  const handleEdit = (product: ProductType) => {
    setEditingProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingProduct(null);
  };

  const requestDelete = (product: ProductType) => {
    setDeleteTarget(product);
    setConfirmVisible(true);
  };

  const handleCancelDelete = () => {
    setConfirmVisible(false);
    setDeleteTarget(null);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      deleteProduct(deleteTarget.id);
      toast.show("Xóa sản phẩm thành công", "error");
    }
    setConfirmVisible(false);
    setDeleteTarget(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Text
                style={styles.name}
                onPress={() =>
                  router.push({
                    pathname: "/product/[id]",
                    params: { id: item.id },
                  })
                }
              >
                {item.name}
              </Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.button, styles.editButton]}
                  onPress={() => handleEdit(item)}
                >
                  <Text style={styles.buttonText}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => requestDelete(item)}
                >
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text>
              Giá: {item.price.toLocaleString()}đ - SL: {item.quantity}
            </Text>
          </View>
        )}
      />

      <ProductModal
        visible={modalVisible}
        onClose={handleCloseModal}
        editData={editingProduct}
      />

      <DeleteConfirmModal
        visible={confirmVisible}
        title="Xác nhận"
        message={
          deleteTarget
            ? `Xóa sản phẩm \"${deleteTarget.name}\"?`
            : "Bạn có chắc muốn xóa?"
        }
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#c6b0b0ff", padding: 10 },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  actionButtons: { flexDirection: "row", gap: 8 },
  button: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6 },
  editButton: { backgroundColor: "#ffc107" },
  deleteButton: { backgroundColor: "#dc3545" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
