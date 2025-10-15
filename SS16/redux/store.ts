import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import randomReducer from './slices/randomNumSlice'
import viewModeReducer from './slices/viewModeSlice'
import userReducer from './slices/userSlice'
import languageReducer from './slices/languageSlice'
import positionReducer from './slices/positionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
    viewMode: viewModeReducer,
    user: userReducer,
    language: languageReducer,
    position: positionReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
