import { configureStore } from '@reduxjs/toolkit';
import { citiesApi, specialitiesApi } from 'features/lookups';
import { companiesApi } from 'features/companies';

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [specialitiesApi.reducerPath]: specialitiesApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;