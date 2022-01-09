import { Link, Typography } from '@mui/material';
import React from 'react';

export function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://kidkred.com">
          Kid Kred
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }