import { configureStore } from '@reduxjs/toolkit';
import MyToDosReducer from '../store/ReduxStoreSlices';

export const store = configureStore({
    reducer: 
        MyToDosReducer
});