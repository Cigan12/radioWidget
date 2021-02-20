import { AnyAction, Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

interface IReduxProviderProps {
    reduxStore: Store<any, AnyAction>;
}

export const ReduxProvider: React.FC<IReduxProviderProps> = ({
    children,
    reduxStore,
}) => {
    return <Provider store={reduxStore}>{children}</Provider>;
};
