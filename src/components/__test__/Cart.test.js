import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from '../Cart';

const mockStore = configureStore([]);

describe('Cart Component', () => {
    it('renders products in the cart', () => {
        const store = mockStore({
            products: {
                cart: [
                    { id: 1, name: 'Product A', price: 10, quantity: 2, image: 'a.png' },
                    { id: 2, name: 'Product B', price: 20, quantity: 1, image: 'b.png' }
                ]
            }
        });

        render(
            <Provider store={store}>
                <Cart cartVisible={false} />
            </Provider>
        );

        expect(screen.getByText(/Product A/i)).toBeInTheDocument();
        expect(screen.getByText(/Product B/i)).toBeInTheDocument();
    });

    it('dispatches removeFromCart when delete icon is clicked', () => {
        const store = mockStore({
            products: {
                cart: [{ id: 1, name: 'Product A', price: 10, quantity: 1, image: 'a.png' }]
            }
        });

        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Cart cartVisible={false} />
            </Provider>
        );

        const deleteIcon = screen.getByAltText(/delete-icon/i);
        fireEvent.click(deleteIcon);

        expect(store.dispatch).toHaveBeenCalled();
    });
});
