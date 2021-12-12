import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';

function AppBarMUI () {

const [open, setOpen ] = useState(false);

const handleOpen = () => { 
    setOpen(true); 
}

const handleClose = () => { 
    setOpen(false); 
}

return (
    <AppBar position='static'>
    <Toolbar>
    <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>

    <Drawer anchor='left' open={ open } onClick={ handleClose }>
        <List>
          <ListItem button component={ Link } to='/Tili'>
            <ListItemIcon><AccountCircleIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Tili' />
          </ListItem>
          <ListItem button component={ Link } to='/'>
            <ListItemIcon><PetsIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Koirat' />
          </ListItem>
        </List>
      </Drawer>

    <Typography variant='h5'>Koirabongaus</Typography>

</Toolbar>
</AppBar>
  )
}

export default AppBarMUI;