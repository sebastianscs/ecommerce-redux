import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.products.currentUser);

    if (!currentUser) {
        // Si no está autenticado, redirigir al login
        return <Navigate to="/login" />;
    }

    // Si está autenticado, renderizar el componente
    return children;
};

export default ProtectedRoute;
