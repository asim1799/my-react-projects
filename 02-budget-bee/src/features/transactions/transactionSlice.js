import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state[state.length] = { id: state.length, ...action.payload };
    },
  },
});
export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
