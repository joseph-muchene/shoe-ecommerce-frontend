import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./app/Feartures/Auth/AuthSlice";
import UserReducer from "./app/Feartures/User/UserSlice";
import CartReducer from "./app/Feartures/Cart/CartSlice";
import ProductReducer from "./app/Feartures/Product/ProductSlice";
import OrderReducer from "./app/Feartures/Order/OrderSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  Cart: CartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    Cart: persistedReducer,
    Auth: AuthReducer,
    Order: OrderReducer,
    Product: ProductReducer,
    User: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
