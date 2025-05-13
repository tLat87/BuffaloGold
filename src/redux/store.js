import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import arenasReducer from './slices/arenasSlice';

const rootReducer = combineReducers({
  arenas: arenasReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
