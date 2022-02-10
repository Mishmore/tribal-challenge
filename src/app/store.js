import { configureStore } from '@reduxjs/toolkit'
import businessReducer from './state/businessSlice'
import peopleReducer from './state/peopleSlice'
import uiReducer from './state/uiSlice'

export const store = configureStore({
  reducer: {
    business: businessReducer,
    people: peopleReducer,
    ui: uiReducer,
  },
})
