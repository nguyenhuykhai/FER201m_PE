import React, { useState } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import './SidebarItemAccordion.css';

// Material
import Icon from '@mui/material/Icon';

const sidebarItemAccordion = ({ item, resized }) => {
  const [expandIcon, setExpandIcon] = useState('expand_more');
  const [subItems, setSubItems] = useState([]);

  const toggleSubItems = () => {
    const icon = expandIcon === 'expand_less' ? 'expand_more' : 'expand_less';
    setExpandIcon(icon);
  };

  const createSubItems = () => {
    const items = item.subItems.map((it, index) => {
      return <SidebarItem key={index} item={it} resized={resized} />;
    });
    setSubItems(items);
  };

  return (
    <div className="sidebar-accordion">
      <section className="sidebar-accordion-header" onClick={toggleSubItems}>
        <Icon className="sidebar-item-icon">{item.icon}</Icon>
        {!resized && <span className="accordion-label">{item.text}</span>}
        <div className="sidebar-accordion-arrows">
          <Icon className="sidebar-item-icon">{expandIcon}</Icon>
        </div>
      </section>

      <section className="sidebar-accordion-body">
        <div className="sidebar-accordion-items">
          {expandIcon === 'expand_less' &&
            item.subItems.map((it, index) => {
              return <SidebarItem key={index} item={it} resized={resized} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default sidebarItemAccordion;
