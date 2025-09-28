import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface CurrencyInputProps {
  currency: string;
  value: string;
  onChange: (value: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ currency, value, onChange }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    placeholder={`${currency}`}
    keyboardType="numeric"
  />
);

const Bt5: React.FC = () => {
  const [amounts, setAmounts] = useState<{ VND: string; USD: string }>({ VND: '', USD: '' });
  const exchangeRate = 25000;

  const handleChange = (currency: string, value: string) => {
    setAmounts(prev => {
      const newAmounts = { ...prev, [currency]: value };
      if (currency === 'VND' && value) {
        newAmounts.USD = (parseFloat(value) / exchangeRate).toFixed(2);
      } else if (currency === 'USD' && value) {
        newAmounts.VND = (parseFloat(value) * exchangeRate).toString();
      }
      return newAmounts;
    });
  };

  return (
    <View style={styles.container}>
      <CurrencyInput
        currency="VND"
        value={amounts.VND}
        onChange={value => handleChange('VND', value)}
      />
      <CurrencyInput
        currency="USD"
        value={amounts.USD}
        onChange={value => handleChange('USD', value)}
      />
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
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Bt5;