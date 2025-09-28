import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const Bt7: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên.';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Vui lòng nhập email hợp lệ.';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải dài ít nhất 6 ký tự.';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Xác nhận mật khẩu không khớp.';
      isValid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (field: keyof typeof formData) => {
    validateForm();
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Thành công', `Đăng ký tài khoản thành công!\nĐăng ký tài khoản thành công!`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        placeholder="Họ và tên"
        onBlur={() => handleBlur('name')}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onBlur={() => handleBlur('email')}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        placeholder="Mật khẩu"
        secureTextEntry
        onBlur={() => handleBlur('password')}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
      <TextInput
        style={styles.input}
        value={formData.confirmPassword}
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        onBlur={() => handleBlur('confirmPassword')}
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
      <Button title="Đăng ký" onPress={handleSubmit} disabled={!validateForm()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Bt7;