import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import taskReducer from "./features/taskSlice";
import timeReducer from "./features/timerSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  task: taskReducer,
  timer: timeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
