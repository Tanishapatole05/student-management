// Sidebar.jsx
import React from 'react';
import { BsGrid1X2Fill, BsPeopleFill, BsFillAwardFill, BsBuilding, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBuildingFill, BsPower } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsBuildingFill className='icon_header' /> DATAGAMI
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard" onClick={OpenSidebar}>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/students" onClick={OpenSidebar}>
            <BsPeopleFill className='icon' /> Students
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/courses" onClick={OpenSidebar}>
            <BsFillAwardFill className='icon' /> Courses
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/course-providers" onClick={OpenSidebar}>
            <BsBuilding className='icon' /> Course-providers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings" onClick={OpenSidebar}>
            <BsFillGearFill className='icon' /> Setting
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/signUp" onClick={OpenSidebar}>
            <BsPower className='icon' /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
