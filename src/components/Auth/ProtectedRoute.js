/* import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return isLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
 */


import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
