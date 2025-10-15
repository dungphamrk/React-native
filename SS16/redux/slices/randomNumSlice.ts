import { createSlice } from '@reduxjs/toolkit'

interface RandomNumState {
  value: number[]
}

const initialState: RandomNumState = {
  value: [],
}

const randomNumSlice = createSlice({
  name: 'randomNum',
  initialState,
  reducers: {
    addRandom: (state) => {
      const random = Math.floor(Math.random() * 100) + 1
      state.value.push(random)
    },
    clearAll: (state) => {
      state.value = []
    },
  },
})

export const { addRandom, clearAll } = randomNumSlice.actions
export default randomNumSlice.reducer
