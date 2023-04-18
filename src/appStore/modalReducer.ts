import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { modalInterface } from '../interface'
import { CREATE } from '../utils/constant'

const modalOption: modalInterface = {
  isOpen: false,
  activity: CREATE,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalOption
  },
  reducers: {
    showModal: (state, action:PayloadAction<modalInterface>) => {
      state.modalOption = action.payload
    },
  },
})
export const { showModal } = modalSlice.actions
export default modalSlice.reducer