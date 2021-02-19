import { configureStore } from '@reduxjs/toolkit';
import { RadioWidgetReducer } from './reducers/RadioWidget.reducer';

export const store = configureStore({
    reducer: { RadioWidgetReducer },
});

export type TStore = ReturnType<typeof store.getState>;
