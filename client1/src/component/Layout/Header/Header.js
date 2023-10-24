import React from 'react';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import './Header.css';

// Material
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ toggleSidebar }) => (
  <header className="header">
    <section className="sidebar-toggle">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="sidebar-toggle"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </IconButton>
    </section>

    <ProfileMenu />
  </header>
);

export default Header;
