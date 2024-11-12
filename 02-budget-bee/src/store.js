import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
export default configureStore({
  reducer: { account: accountReducer },
});
