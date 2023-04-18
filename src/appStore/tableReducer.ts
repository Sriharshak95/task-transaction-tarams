import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { customerAction } from "../interface";

const initialState = {
  transactionData: localStorage.getItem('transactionData') ? JSON.parse(localStorage.getItem('transactionData')) : []
}

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<customerAction>) => {
      state.transactionData = [...state.transactionData, action.payload];
      localStorage.setItem('transactionData', JSON.stringify(state.transactionData));
    },
    deleteRow: (state, action: PayloadAction<customerAction>) => {
      const idToDelete = action.payload.id;
      const index = state.transactionData.findIndex((row) => row.id === idToDelete);
      if (index !== -1) {
        state.transactionData.splice(index, 1);
        localStorage.setItem('transactionData', JSON.stringify(state.transactionData));
      }
    },
    updateRow: (state, action: PayloadAction<customerAction>) => {
      const updatedRow = action.payload;
      const index = state.transactionData.findIndex(
        (row) => row.id === updatedRow.id
      );
      if (index !== -1) {
        state.transactionData[index] = updatedRow;
        localStorage.setItem('transactionData', JSON.stringify(state.transactionData));
      }
    },
  },
});

export const { addRow, updateRow, deleteRow } = tableSlice.actions;
export default tableSlice.reducer;
