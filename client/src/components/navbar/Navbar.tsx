import React from "react";
import "./navbar.css";

const Navbar = ({ active, setActive }) => {
  const menuItems = [
    { id: 1, name: "Profile", icon: "👤" },
    { id: 2, name: "Home", icon: "🏠" },
    { id: 3, name: "Notification", icon: "🔔", notification: 12 },
    { id: 4, name: "Bookmark", icon: "📑" },
    { id: 5, name: "Messages", icon: "💬" },
    { id: 6, name: "Do Not Disturb", icon: "🌙" },
    { id: 7, name: "Theme", icon: "🌓" },
    { id: 8, name: "Setting", icon: "⚙️" },
    { id: 9, name: "Log Out", icon: "🔓" },
  ];

  return (
      <>
        <div className="header">
        <span>Linky</span>
        <i>⬇️</i>
      </div>
      <ul>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="User Profile" />
        <div className="name">User Name</div>
        <div className="email">user@gmail.com</div>
      </div>
      </>
  );
};

export default Navbar;
