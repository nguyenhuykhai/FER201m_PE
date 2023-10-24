import React, { useState } from 'react';
import Header from '../Header/Header';
import './MainContainer.css';

const MainContainer = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className="main-container">
      <Header toggleSidebar={handleToggleSidebar} />
    </div>
  );
};

export default MainContainer;
