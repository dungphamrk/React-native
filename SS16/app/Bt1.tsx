import React from 'react'
import { View, Text, Button } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { increment, decrement } from '../redux/slices/counterSlice'

export default function CounterScreen() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Count: {count}</Text>
      <Button title="Tăng" onPress={() => dispatch(increment())} />
      <Button title="Giảm" onPress={() => dispatch(decrement())} />
    </View>
  )
}
