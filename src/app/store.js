import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
