import React from 'react';
import './SidebarItem.css';

// Material
import Icon from '@mui/material/Icon';

const SidebarItem = ({ item, resized }) => (
  <div
    className={`sidebar-item ${
      item.link === location.pathname ? 'active' : ''
    }`}
  >
    <Icon className="sidebar-item-icon">{item.icon}</Icon>
    {!resized && <span className="sidebar-item-text">{item.text}</span>}
  </div>
);

export default SidebarItem;
