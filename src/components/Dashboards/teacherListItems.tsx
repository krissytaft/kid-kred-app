import * as  React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout'



export const teacherListItems = (
  <div>
    <ListItem button>
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Classrooms" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <AssignmentIcon />
    </ListItemIcon>
    <ListItemText primary="Teacher's Desk" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <HelpIcon />
    </ListItemIcon>
    <ListItemText primary="Support" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <LogoutIcon />
    </ListItemIcon>
    <ListItemText primary="Logout" />
  </ListItem>
    </div>
);
