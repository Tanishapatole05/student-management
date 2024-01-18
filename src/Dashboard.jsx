// Dashboard.jsx

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function Dashboard({ OpenSidebar, openSidebarToggle }) {
  return (
    <div>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

export default Dashboard;
