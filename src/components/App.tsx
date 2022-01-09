import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './Home';
import { Login } from './Login';
import { Dashboard } from './Dashboard';


import './App.css';
import { PublicRoute } from '../util/PublicRoute';
import { PrivateRoute } from '../util/PrivateRoute';
import { getToken, removeUserSession, setUserSession } from '../util/common';
import { LoginServiceApi } from '../services/loginService';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    // If the user has not logged in yet, exit out of the useEffect
    if (!token) {
      return;
    }

    // If the user has logged in, check that the token is valid
    const loginService = LoginServiceApi();
    loginService.verifyToken(token).then((verifyTokenResponse) => {
        setUserSession(verifyTokenResponse.token, verifyTokenResponse.user)
        setAuthLoading(false);
    }).catch((err) => {
        removeUserSession();
        setAuthLoading(false);
    })    
  })

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/login" element={<PublicRoute><Login/> </PublicRoute>}  />
              <Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}  />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
