import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: true, // TODO: not in production
});

export type AppDispatch = typeof store.dispatch;
export default store;
