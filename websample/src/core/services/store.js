import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import userListReducer from "./slices/userListSlice";
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
import storage from "redux-persist/lib/storage"; // Default storage for web
import { thunk } from "redux-thunk"; // Import Redux Thunk

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedUserListReducer = persistReducer(persistConfig, userListReducer);

// Configure the store
const store = configureStore({
  reducer: {
    user: persistedReducer,
    userList: persistedUserListReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
