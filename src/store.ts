import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { RadioWidgetReducer } from './reducers/RadioWidgetReducer/RadioWidget.reducer';
import { radioWidgetSaga } from './sagas/RadioWidgetSaga/RadioWidget.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { RadioWidgetReducer },
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(radioWidgetSaga);

export type TStore = ReturnType<typeof store.getState>;
