import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export default function ContactListItem({
  contact,
  onEdit,
  onDelete,
}: {
  contact: Contact;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const confirmDelete = () => {
    Alert.alert("Xóa liên hệ", "Bạn có chắc chắn muốn xóa?", [
      { text: "Hủy" },
      { text: "Xóa", onPress: onDelete, style: "destructive" },
    ]);
  };

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text>{contact.phone}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.edit}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmDelete}>
          <Text style={styles.delete}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { fontWeight: "bold" },
  actions: { flexDirection: "row", gap: 12 },
  edit: { color: "green" },
  delete: { color: "red" },
});
