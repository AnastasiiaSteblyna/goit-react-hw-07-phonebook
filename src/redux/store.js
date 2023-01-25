import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './slices/contactSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});
