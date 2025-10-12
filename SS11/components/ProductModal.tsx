import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Product, useProduct } from "../context/ProductContext";
import { useToast } from "./Toast";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  editData?: Product | null;
}

export default function ProductModal({
  visible,
  onClose,
  editData,
}: ProductModalProps) {
  const { addProduct, editProduct } = useProduct();
  const toast = useToast();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setPrice(editData.price.toString());
      setQuantity(editData.quantity.toString());
    } else {
      setName("");
      setPrice("");
      setQuantity("");
    }
    setErrors({});
  }, [editData, visible]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Tên sản phẩm không được để trống";
    } else if (name.trim().length < 2) {
      newErrors.name = "Tên sản phẩm phải có ít nhất 2 ký tự";
    }

    if (!price.trim()) {
      newErrors.price = "Giá không được để trống";
    } else if (isNaN(Number(price)) || Number(price) <= 0) {
      newErrors.price = "Giá phải là số dương";
    }

    if (!quantity.trim()) {
      newErrors.quantity = "Số lượng không được để trống";
    } else if (
      isNaN(Number(quantity)) ||
      Number(quantity) <= 0 ||
      !Number.isInteger(Number(quantity))
    ) {
      newErrors.quantity = "Số lượng phải là số nguyên dương";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      if (editData) {
        await editProduct({
          id: editData.id,
          name: name.trim(),
          price: Number(price),
          quantity: Number(quantity),
        });
        toast.show("Cập nhật sản phẩm thành công", "success");
      } else {
        await addProduct({
          name: name.trim(),
          price: Number(price),
          quantity: Number(quantity),
        });
        toast.show("Thêm sản phẩm thành công", "success");
      }
      onClose();
    } catch (error) {
      toast.show("Có lỗi xảy ra khi lưu sản phẩm", "error");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            {editData ? "Sửa sản phẩm" : "Thêm sản phẩm"}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tên sản phẩm *</Text>
            <TextInput
              placeholder="Nhập tên sản phẩm"
              style={[styles.input, errors.name && styles.inputError]}
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (errors.name) {
                  setErrors({ ...errors, name: "" });
                }
              }}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Giá (VNĐ) *</Text>
            <TextInput
              placeholder="Nhập giá sản phẩm"
              style={[styles.input, errors.price && styles.inputError]}
              value={price}
              keyboardType="numeric"
              onChangeText={(text) => {
                setPrice(text);
                if (errors.price) {
                  setErrors({ ...errors, price: "" });
                }
              }}
            />
            {errors.price && (
              <Text style={styles.errorText}>{errors.price}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Số lượng *</Text>
            <TextInput
              placeholder="Nhập số lượng"
              style={[styles.input, errors.quantity && styles.inputError]}
              value={quantity}
              keyboardType="numeric"
              onChangeText={(text) => {
                setQuantity(text);
                if (errors.quantity) {
                  setErrors({ ...errors, quantity: "" });
                }
              }}
            />
            {errors.quantity && (
              <Text style={styles.errorText}>{errors.quantity}</Text>
            )}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={onClose}>
              <Text style={styles.btnText}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={handleSave}>
              <Text style={styles.btnText}>{editData ? "Cập nhật" : "Thêm mới"}</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 16,
  },
  modal: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 20,
    maxHeight: "85%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#1f2937",
  },
  inputContainer: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#f3f4f6",
  },
  inputError: {
    borderColor: "#ff4444",
    backgroundColor: "#fff5f5",
  },
  errorText: {
    color: "#dc2626",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 12,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnPrimary: {
    backgroundColor: "#2563eb",
  },
  btnSecondary: {
    backgroundColor: "#6b7280",
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
