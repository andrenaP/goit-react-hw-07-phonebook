import { configureStore } from '@reduxjs/toolkit';
import filterSlice from 'redux/filterSlice';
import { contactApi } from 'redux/contact';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
