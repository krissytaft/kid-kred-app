import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../../util/common';
import { Copyright } from '../Copyright';

export function AdminDashboard() {
    const navigate = useNavigate();
    const user = getUser(); 

    if (!user) {
        // return to login
    }

    const handleClickLogout = () => {
        removeUserSession();
        navigate('/')
    }
    
    return (
        <Box>
             Welcome {user?.name}!<br /><br />
            <input type="button" onClick={handleClickLogout} value="Logout" />
            <Copyright sx={{ mt: 5 }} />
        </Box>
    )
}
