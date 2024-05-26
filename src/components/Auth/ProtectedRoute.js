import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return isLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
