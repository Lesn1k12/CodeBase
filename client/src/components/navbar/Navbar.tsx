import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ active, setActive }) => {
  const menuItems = [
    { id: 1, name: "Profile", icon: "👤" },
    { id: 2, name: "Home", icon: "🏠" },
    { id: 3, name: "Notification", icon: "🔔" },
    { id: 4, name: "Bookmark", icon: "📑" },
    { id: 5, name: "Messages", icon: "💬" },
    { id: 6, name: "Do Not Disturb", icon: "🌙" },
    { id: 7, name: "Analytics", icon: "📊" },
    { id: 8, name: "Setting", icon: "⚙️" },
    { id: 9, name: "Log Out", icon: "🔓" },
  ];

  return (
    <div className="navbar-container">
      <h2 className="navbar-title">Menu</h2>
      <ul className="navbar-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "navbar-item active" : "navbar-item"}
          >
            <span className="navbar-icon">{item.icon}</span>
            <span className="navbar-text">{item.name}</span>
          </li>
        ))}
      </ul>
      <button className="create-button">➕ Add New</button>
    </div>
  );
};

export default Navbar;

