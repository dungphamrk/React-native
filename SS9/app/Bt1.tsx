import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContactListItem from "../components/ContactListItem";
import ContactForm from "../components/ContactForm";
interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}
export default function Bt1() {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [showForm, setShowForm] = React.useState(false);
  const [editContact, setEditContact] = React.useState<Contact | null>(null);
  useEffect(() => {
    const loadContacts = async () => {
      const stored = await AsyncStorage.getItem("contacts");
      if (stored) {
        setContacts(JSON.parse(stored));
      }
    };
    loadContacts();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const handleSave = (contact: Contact) => {
    if (editContact) {
      setContacts((prev) =>
        prev.map((c) => (c.id === contact.id ? contact : c))
      );
      setEditContact(null);
    } else {
      setContacts((prev) => [...prev, contact]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh bạ</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.addText}>Thêm mới</Text>
        </TouchableOpacity>
      </View>

      {contacts.length === 0 ? (
        <View style={styles.empty}>
          <Text>Danh bạ của bạn trống.</Text>
        </View>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContactListItem
              contact={item}
              onEdit={() => {
                setEditContact(item);
                setShowForm(true);
              }}
              onDelete={() => handleDelete(item.id)}
            />
          )}
        />
      )}

      {showForm && (
        <ContactForm
          visible={showForm}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditContact(null);
          }}
          contact={editContact}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  addButton: {
    color: "white",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 6,
  },
  addText: { color: "white" },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
});
