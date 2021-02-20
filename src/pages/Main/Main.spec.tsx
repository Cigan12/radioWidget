import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from './Main.page';
import { ReduxProvider } from '../../components/utils/Redux.provider';
import { store } from '../../store';

test('Renders radio widget', () => {
    render(
        <ReduxProvider reduxStore={store}>
            <MainPage />
        </ReduxProvider>
    );
    const radioWidget = screen.getByText(/stations/i);

    expect(radioWidget).toBeInTheDocument();
});
