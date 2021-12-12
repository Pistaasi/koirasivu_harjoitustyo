import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';

function ValikkoMUI () {

  const [open, setOpen ] = useState(false);

  const handleOpen = () => { 
    setOpen(true); 
  }

  const handleClose = () => { 
    setOpen(false); 
}

return (
    <Box>
      <IconButton onClick={ handleOpen }><MenuIcon /></IconButton>
      <Drawer anchor='left' open={ open } onClick={ handleClose }>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Tiedot' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ListIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Koirat' />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default ValikkoMUI;