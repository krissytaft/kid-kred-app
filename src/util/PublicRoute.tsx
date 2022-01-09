import React from 'react';
import  { Navigate, Route } from 'react-router-dom';
import { getToken } from './common';


/**
 * Handles the Public routes
 * Use to access the routes without login token only. So if user is already logged-in then we will redirect it to the dashboard page.
 */
export function PublicRoute({ children }: any): JSX.Element {
    const token = getToken();
    return !token ? children : <Navigate to="/dashboard" />;
}