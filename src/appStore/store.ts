import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableReducer';
import modalReducer from './modalReducer';
const store = configureStore({
  reducer: {
    tableUpdates: tableReducer,
    modalOpen: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;