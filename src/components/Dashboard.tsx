import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../util/common';

export function Dashboard() {
    const navigate = useNavigate();
    const user = getUser(); 

    if (!user) {
        // return to login
    }

    const handleClickLogout = () => {
        removeUserSession();
        navigate('/login')
    }
    
    return (
        <div>
             Welcome ${user?.name}!<br /><br />
            <input type="button" onClick={handleClickLogout} value="Logout" />
        </div>
    )
}
