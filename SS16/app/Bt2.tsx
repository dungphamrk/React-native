import React from 'react'
import { View, Text, Button } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {addRandom} from '../redux/slices/randomNumSlice'
export default function RandomNumberScreen() {
    const dispatch = useAppDispatch()
    const numbers = useAppSelector((state) => state.random.value)
    
  return (
   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Thêm số ngẫu nhiên" onPress={() => dispatch(addRandom())} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>{numbers.join(", ")}</Text>
    </View>
  )
}
