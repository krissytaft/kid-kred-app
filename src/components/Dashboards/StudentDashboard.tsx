import * as  React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OrderHistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getUser, removeUserSession, UserType } from '../../util/common';
import { Copyright } from '../Copyright';
import { Avatar } from '@mui/material';
import { Classrooms } from '../Teachers/Classrooms';
import { PrivateRoute } from '../../util/PrivateRoute';
import Logo from '../../images/kidkred_logo.png';
import { Home } from '../Students/Home';
import { Emporium } from '../Students/Emporium';
import { OrderHistory } from '../Students/OrderHistory';
import { Goals } from '../Students/Goals';
import { Data } from '../Students/Data';
import { Mailbox } from '../Students/Mailbox';
import { Support } from '../Students/Support';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function StudentDashboardContent() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const user = getUser(); 
  if (!user) {
      navigate('/login')
  }
  if (user?.userType !== UserType.Student) {
    navigate('/')
  }

  const handleClickLogout = () => {
    removeUserSession();
    navigate('/')
}


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
                component="img"
                sx={{
                height: 50,
                }}
                alt="KidKred logo."
                src={Logo}
            />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            <Avatar>KT</Avatar>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <div>
                <ListItem button onClick={() => navigate('/studentDashboard/home')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/emporium')}>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Emporium" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/orderHistory')}>
                <ListItemIcon>
                  <OrderHistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Order History" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/goals')}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Goals" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/data')}>
                <ListItemIcon>
                  <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary="Data" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/mailbox')}>
                <ListItemIcon>
                  <MailboxIcon />
                </ListItemIcon>
                <ListItemText primary="Mailbox" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/classrooms')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Classrooms" />
              </ListItem>
              <ListItem button onClick={() => navigate('/studentDashboard/support')}>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItem>
              <ListItem button onClick={handleClickLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </div>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        <Toolbar />          
        <Routes>
          <Route path="home" element={<PrivateRoute> <Home/></PrivateRoute>}/>
          <Route path="emporium" element={<PrivateRoute> <Emporium/></PrivateRoute>}/>
          <Route path="orderhistory" element={<PrivateRoute> <OrderHistory/></PrivateRoute>}/>
          <Route path="goals" element={<PrivateRoute> <Goals/></PrivateRoute>}/>
          <Route path="data" element={<PrivateRoute> <Data/></PrivateRoute>}/>
          <Route path="mailbox" element={<PrivateRoute> <Mailbox/></PrivateRoute>}/>
          <Route path="classrooms" element={<PrivateRoute> <Classrooms/></PrivateRoute>}/>
          <Route path="support" element={<PrivateRoute> <Support/></PrivateRoute>}/>
        </Routes>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}

export default function StudentDashboard() {
  return <StudentDashboardContent />;
}