import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Auth from '../../../../services/Auth.service';
import './ProfileMenu.css';

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    Auth.logout();
  };

  return (
    <div className="profile-menu">
      <img
        className="avatar"
        onClick={handleClick}
        src="https://material.angular.io/assets/img/examples/shiba2.jpg"
        alt="Avatar photo"
      />

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={logout}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
