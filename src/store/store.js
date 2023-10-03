import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { api } from './api/api';
import { reducer as favoritesReducer } from './favorite/favorites.slice';

 export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

