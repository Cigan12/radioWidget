import React from 'react';
import {
    queries,
    Queries,
    render as rtlRender,
    RenderOptions,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

function render<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement
>(
    ui: React.ReactElement,
    { ...renderOptions }: RenderOptions<Q, Container> = {}
) {
    const Wrapper: React.FC = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
