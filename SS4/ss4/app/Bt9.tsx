import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Step1: React.FC<{ formData: any; onChange: (key: string, value: string) => void }> = ({ formData, onChange }) => (
  <View style={styles.step}>
    <TextInput
      style={styles.input}
      value={formData.name}
      onChangeText={(text) => onChange('name', text)}
      placeholder="Họ và tên"
    />
    <TextInput
      style={styles.input}
      value={formData.age}
      onChangeText={(text) => onChange('age', text)}
      placeholder="Tuổi"
      keyboardType="numeric"
    />
  </View>
);

const Step2: React.FC<{ formData: any; onChange: (key: string, value: string) => void }> = ({ formData, onChange }) => (
  <View style={styles.step}>
    <TextInput
      style={styles.input}
      value={formData.phone}
      onChangeText={(text) => onChange('phone', text)}
      placeholder="Số điện thoại"
      keyboardType="phone-pad"
    />
    <TextInput
      style={styles.input}
      value={formData.address}
      onChangeText={(text) => onChange('address', text)}
      placeholder="Địa chỉ"
    />
  </View>
);

const Step3: React.FC<{ formData: any }> = ({ formData }) => (
  <View style={styles.step}>
    <Text>Họ và tên: {formData.name}</Text>
    <Text>Tuổi: {formData.age}</Text>
    <Text>Số điện thoại: {formData.phone}</Text>
    <Text>Địa chỉ: {formData.address}</Text>
  </View>
);

const Bt9: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', age: '', phone: '', address: '' });
  const [step, setStep] = useState(1);

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    alert('Đăng ký thông tin thành công!');
  };

  return (
    <View style={styles.container}>
      {step === 1 && <Step1 formData={formData} onChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} onChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} />}
      <View style={styles.buttonContainer}>
        {step > 1 && <Button title="Quay lại" onPress={prevStep} />}
        {step < 3 ? (
          <Button title="Tiếp theo" onPress={nextStep} />
        ) : (
          <Button title="Hoàn tất" onPress={handleSubmit} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginTop: 20,
  },
  step: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Bt9;