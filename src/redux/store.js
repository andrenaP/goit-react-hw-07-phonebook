import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import filterSlice from 'redux/filterSlice';
import contactSlice from 'redux/contactSlice';
import { contactApi } from 'redux/contact';
import { setupListeners } from '@reduxjs/toolkit/query';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
