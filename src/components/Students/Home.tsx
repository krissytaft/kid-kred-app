import * as React from 'react';

import { Box, Button, Container, Grid, Paper } from '@mui/material';

export function Home() {
    return (
    <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  "Today a reader. Tomorrow a leader" - Anonymous
                  <Button>Change Quote</Button>
                </Paper>
                
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  You have 21 KidKreds
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  Your Goals
                </Paper>
              </Grid>
            </Grid>
          </Container>
    </div>
    )
}