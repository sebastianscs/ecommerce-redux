import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import Products from '../components/ProductsList';
import Cart from '../components/Cart';
import Login from '../components/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import Checkout from '../components/Checkout';

const App = () => {
    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <Router>
            <Header cartVisible={cartVisible} setCartVisible={toggleCartVisibility} />
            <Cart cartVisible={cartVisible} setCartVisible={setCartVisible}/>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/products"
                    element={
                        <ProtectedRoute>
                            <Products />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                            <Cart cartVisible={cartVisible} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/checkout'
                    element={
                        <ProtectedRoute>
                            <Checkout cartVisible={!cartVisible}/>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
