import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage for web
import { thunk } from "redux-thunk"; // Import Redux Thunk

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store
const store = configureStore({
  reducer: {
    user: persistedReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
