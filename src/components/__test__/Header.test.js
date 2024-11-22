import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
    it('renders the title and navigation links', () => {
        const setCartVisible = jest.fn();
        render( <BrowserRouter>
                    <Header cartVisible={false} setCartVisible={setCartVisible} />
                </BrowserRouter>
            );
        expect(screen.getByText(/Kim Store/i)).toBeInTheDocument();
        expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
        expect(screen.getByText(/Productos/i)).toBeInTheDocument();
        expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
    });

    it('calls setCartVisible when the cart icon is clicked', () => {
        const setCartVisible = jest.fn();
        render( <BrowserRouter>
                    <Header cartVisible={false} setCartVisible={setCartVisible} />
                </BrowserRouter>);
        const cartIcon = screen.getByAltText(/cart.svg/i);
        fireEvent.click(cartIcon);
        expect(setCartVisible).toHaveBeenCalled();
    });
});
