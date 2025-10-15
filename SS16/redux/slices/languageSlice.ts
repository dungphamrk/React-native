import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Language = 'en' | 'vi'

interface LanguageState {
  currentLanguage: Language
}

const initialState: LanguageState = {
  currentLanguage: 'en',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload
    },
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === 'en' ? 'vi' : 'en'
    },
  },
})

export const { setLanguage, toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
