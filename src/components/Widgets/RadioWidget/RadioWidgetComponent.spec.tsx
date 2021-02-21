import React from 'react';
import { render } from '../../utils/Redux.util';
import { RadioWidget } from './RadioWidget.component';

test('Renders radio widget correctly', () => {
    const radioWidget = render(<RadioWidget />);

    expect(radioWidget).toMatchSnapshot();
});
