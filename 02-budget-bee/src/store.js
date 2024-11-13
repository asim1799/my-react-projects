import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import transactionSlice from "./features/transactions/transactionSlice";
export default configureStore({
  reducer: { account: accountReducer, transaction: transactionSlice },
});
