import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import themeReducer from "./features/themeSlice";
import { productApi } from "./features/product/productApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: persistedCartReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
