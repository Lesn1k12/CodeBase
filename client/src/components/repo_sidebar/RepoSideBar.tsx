import React from "react";
import "./repoSideBar.css";

function RepoSideBar({ active, setActive }) {
  const repoItems = [
    {
      id: 1,
      name: "repo1",
      icon: "📁",
      title: "repo1",
      link: "/repo1",
    },
    {
      id: 2,
      name: "repo2",
      icon: "📝",
      title: "repo2",
      link: "/repo2",
    },
    {
      id: 3,
      name: "repo3",
      icon: "📅",
      title: "repo3",
      link: "/repo3",
    },
    {
      id: 4,
      name: "repo4",
      icon: "⏱️",
      title: "repo4",
      link: "/repo4",
    },
    {
      id: 5,
      name: "repo5",
      icon: "📊",
      title: "repo5",
      link: "/repo5",
    },
    {
      id: 6,
      name: "repo6",
      icon: "⚙️",
      title: "repo6",
      link: "/repo6",
    },
  ];

  return (
    <>
      <div className="header">
        <i>📊</i> DASHBOARD
      </div>
      <ul>
        {repoItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="footer">Footer text or info</div>
    </>
  );
}
export default RepoSideBar;
