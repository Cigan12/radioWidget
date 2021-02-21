import React from 'react';
import { MainPage } from './Main.page';
import { render } from '../../components/utils/Redux.provider';

test('Renders main page', () => {
    const radioWidget = render(<MainPage />);
    expect(radioWidget).toMatchSnapshot();
});

test('Invoke dispatch start fetch radio', () => {});
