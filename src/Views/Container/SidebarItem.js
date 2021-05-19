import React from 'react'
import './Admin.css';

function SidebarItem({ menu, isActive }) {
    return isActive === true ? (
      <div className="sidebar-item active">
        <p>{menu.name}</p>
      </div>
    ) : (
      <div className="sidebar-item ">
        <p>{menu.name}</p>
      </div>
    );
  }
export default SidebarItem