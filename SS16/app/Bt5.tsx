import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setLanguage } from '../redux/slices/languageSlice'

export default function LanguageScreen() {
  const dispatch = useDispatch()
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  )

  const texts = {
    en: {
      title: 'This is a simple example of managing language in React Native using Redux Toolkit.',
      select: 'Select Language',
    },
    vi: {
      title:
        'Đây là một ví dụ đơn giản về việc quản lý ngôn ngữ trong React Native, sử dụng Redux Toolkit để chuyển đổi văn bản.',
      select: 'Chọn ngôn ngữ',
    },
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{texts[currentLanguage].select}</Text>
      <Picker
        selectedValue={currentLanguage}
        style={styles.picker}
        onValueChange={(value) => dispatch(setLanguage(value))}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Tiếng Việt" value="vi" />
      </Picker>

      <Text style={styles.content}>{texts[currentLanguage].title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
})
