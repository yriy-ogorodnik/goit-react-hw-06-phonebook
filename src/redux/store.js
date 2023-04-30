import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist';
 import contactsReducer from './contactSlice';
 import filterReducer from './filterSlice';

 const rootReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer,
   
 });

 const contactsPersistConfig = {
   key: 'contacts',
   storage,
   whitelist: ['contacts'],
 };

 const persistedContactsReducer = persistReducer(
   contactsPersistConfig,
   rootReducer
 );


 export const store = configureStore({
   reducer: persistedContactsReducer,
   middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });


export const persistor = persistStore(store)