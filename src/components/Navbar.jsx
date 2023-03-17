import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography align="left"  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FACEBOOK
        </Typography>
        <Button color="inherit"><Link to = '/Login'style={{color:"white",textdecoration:"none"}}>Login  </Link></Button>
        <Button color="inherit"><Link to = '/Signup'style={{color:"white",textdecoration:"none"}}>Signup </Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
      
    
  )
}

export default Navbar
