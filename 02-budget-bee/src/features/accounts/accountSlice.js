import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload, balance: 2000 };
    },
    sendMoney: (state, action) => {
      if (state.user.balance >= action.payload) {
        state.user.balance -= action.payload;
      }
    },
  },
});
export const { setUser, sendMoney } = accountSlice.actions;
export default accountSlice.reducer;
