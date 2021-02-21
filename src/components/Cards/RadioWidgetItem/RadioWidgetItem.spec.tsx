import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RadioWidgetItem } from './RadioWidgetItem.component';

describe('Radio widget items works correctly', () => {
    test('Button click fires callback', () => {
        const mockCallback = jest.fn();
        render(
            <RadioWidgetItem
                active={false}
                frequency=""
                image=""
                name=""
                onClick={mockCallback}
            />
        );

        fireEvent.click(screen.getByRole('button'));

        expect(mockCallback.mock.calls.length).toBe(1);
    });

    test('Class active asigns to li tag', () => {
        const { container } = render(
            <RadioWidgetItem active frequency="66,1" image="" name="station" />
        );

        expect(container.firstChild).toHaveClass('active');
    });

    test('Class active does not asign when active props is false', () => {
        const { container } = render(
            <RadioWidgetItem active={false} frequency="" image="" name="" />
        );

        expect(container.firstChild).not.toHaveClass('active');
    });
});
