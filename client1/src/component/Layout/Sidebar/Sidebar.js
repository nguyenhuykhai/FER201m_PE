import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import SidebarItem from './SidebarItem/SidebarItem';
import SidebarItemAccordion from './SidebarItemAccordion/SidebarItemAccordion';
import './Sidebar.css';

import useSidebar from './hooks/useSidebar';

// Material
import IconButton from '@mui/material/IconButton';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

const Sidebar = ({ toggleSidebar }) => {
  const { asideClasses, onToggleSidebar, resizeSidebar, sidebarItems } =
    useSidebar(toggleSidebar);

  return (
    <aside className={asideClasses}>
      <section className="sidebar-toogle-container">
        <IconButton aria-label="resize-sidebar" onClick={onToggleSidebar}>
          {resizeSidebar ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
      </section>

      <section className="sidebar-items">
        {sidebarItems.map((it, index) => {
          if (!it.subItems) {
            return (
              <SidebarItem key={index} item={it} resized={resizeSidebar} />
            );
          } else if (it.subItems?.length) {
            return (
              <SidebarItemAccordion
                key={index}
                item={it}
                resized={resizeSidebar}
              />
            );
          }
          return <></>;
        })}
      </section>

      {!resizeSidebar && <Footer />}
    </aside>
  );
};

export default Sidebar;
