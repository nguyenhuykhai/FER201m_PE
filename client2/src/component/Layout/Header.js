import * as React from 'react';

// IMPORT ĐỊNH TUYẾN ROUTER
import { Link } from "react-router-dom";

// IMPORT MATERIAL UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none'}}>
            <Link to="/" style={{ textDecoration:"none" }}>
                Home
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login" >
                Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}