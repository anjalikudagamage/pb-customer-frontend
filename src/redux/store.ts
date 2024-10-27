import { configureStore } from "@reduxjs/toolkit";
import photographerReducer from "./slice/photographerSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Configure the store
const store = configureStore({
  reducer: {
    photographer: photographerReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed dispatch and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
