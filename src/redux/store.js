import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { todoSlice } from "./slice/todoSlice";
import { postApi } from "./services/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mindmapSlice } from "./slice/mindmapSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    mindmap: mindmapSlice.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), postApi.middleware];
  },
});

setupListeners(store.dispatch);
