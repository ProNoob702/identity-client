import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as oidcReducer } from "redux-oidc";

export const rootReducer = combineReducers({
  oidc: oidcReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: true, // TODO: not in production
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
