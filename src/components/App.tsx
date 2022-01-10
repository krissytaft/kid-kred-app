import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { AdminDashboard } from './Dashboards/AdminDashboard';


import './App.css';
import { PublicRoute } from '../util/PublicRoute';
import { PrivateRoute } from '../util/PrivateRoute';
import { getToken, removeUserSession, setUserSession } from '../util/common';
import { LoginServiceApi } from '../services/loginService';
import SignInSide from './SignIn';
import TeacherDashboard from './Dashboards/TeacherDashboard';
import  StudentDashboard  from './Dashboards/StudentDashboard';

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
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<PublicRoute><SignInSide/> </PublicRoute>}  />
              <Route path="/adminDashboard" element={<PrivateRoute> <AdminDashboard/></PrivateRoute>}  />
              <Route path="/teacherDashboard/*" element={<PrivateRoute> <TeacherDashboard/></PrivateRoute>}  />
              <Route path="/studentDashboard/*" element={<PrivateRoute> <StudentDashboard/></PrivateRoute>}  />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
