import React from 'react';
import  { Navigate } from 'react-router-dom';
import { getToken } from './common';


/**
 * Handles the Private routes
 * Use to access the routes with login token only. So if user is not logged-in then we will redirect back it to the login page.
 */
export function PrivateRoute({ children }: any): JSX.Element {
    const token = getToken();
    return token ? children : <Navigate to="/login" />;
}