import { createSlice } from '@reduxjs/toolkit'

interface ViewModeState {
  isGrid: boolean
}

const initialState: ViewModeState = {
  isGrid: false,
}

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode: (state) => {
      state.isGrid = !state.isGrid
    },
    setListMode: (state) => {
      state.isGrid = false
    },
    setGridMode: (state) => {
      state.isGrid = true
    },
  },
})

export const { toggleViewMode, setListMode, setGridMode } = viewModeSlice.actions
export default viewModeSlice.reducer
