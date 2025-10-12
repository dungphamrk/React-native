import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DeleteConfirmModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  visible,
  title = "Xác nhận",
  message = "Bạn có chắc muốn xóa mục này?",
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={[styles.button, styles.destructive]}>
              <Text style={styles.buttonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  message: { fontSize: 14, color: "#444", marginBottom: 16 },
  actions: { flexDirection: "row", justifyContent: "flex-end", gap: 10 },
  button: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8 },
  cancel: { backgroundColor: "#6c757d" },
  destructive: { backgroundColor: "#dc3545" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});


