import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Products from '../ProductsList';

const mockStore = configureStore([]);

describe('Products Component', () => {
    it('renders products from the store', () => {
        const store = mockStore({
            products: {
                products: [
                    { id: 1, name: 'Product A', price: 10, image: 'a.png' },
                    { id: 2, name: 'Product B', price: 20, image: 'b.png' }
                ]
            }
        });

        render(
            <Provider store={store}>
                <Products />
            </Provider>
        );

        expect(screen.getByText(/Product A/i)).toBeInTheDocument();
        expect(screen.getByText(/\$ 10/i)).toBeInTheDocument();
        expect(screen.getByText(/Product B/i)).toBeInTheDocument();
    });

    it('dispatches addToCart when the button is clicked', () => {
        const store = mockStore({
            products: {
                products: [{ id: 1, name: 'Product A', price: 10, image: 'a.png' }]
            }
        });

        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Products />
            </Provider>
        );

        const addButton = screen.getByText(/Agregar al carrito/i);
        fireEvent.click(addButton);

        expect(store.dispatch).toHaveBeenCalled();
    });
});
