import React from 'react';
import { Typography, Link, AppBar, Toolbar, Box, Button } from '@mui/material';

import Logo from '../images/kidkred_logo.png';
import { useNavigate } from 'react-router-dom';
import { Copyright } from './Copyright';

export function Home() {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login');
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Box
                component="img"
                sx={{
                height: 64,
                }}
                alt="KidKred logo."
                src={Logo}
            />
          <Typography variant="h6" color="inherit" paddingLeft={'4px'} noWrap sx={{ flexGrow: 1 }}>
            Kid Kred
          </Typography>
          <Button color="inherit" onClick={handleClickLogin}>Login</Button>
        </Toolbar>
      </AppBar>
      <Copyright sx={{ mt: 5 }} />
    </Box> 
    )
}
