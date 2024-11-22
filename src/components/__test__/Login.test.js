import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';

const mockStore = configureStore([]);

describe('Login Component', () => {
    it('renders the login form', () => {
        const store = mockStore({ products: { users: [] } });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByPlaceholderText(/Usuario/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
        expect(screen.getByText(/Registrarse/i)).toBeInTheDocument();
    });

    it('handles user registration', () => {
        const store = mockStore({ products: { users: [] } });
        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.change(screen.getByPlaceholderText(/Usuario/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), { target: { value: 'password' } });
        fireEvent.click(screen.getByText(/Registrarse/i));

        expect(store.dispatch).toHaveBeenCalled();
    });
});
