import React from "react";
import { useNavigate } from "react-router-dom";
import "./repoSideBar.css";

function RepoSideBar() {
  const navigate = useNavigate();

  const repoItems = [
    { id: 1, name: "repo1", icon: "📁", title: "repo1", link: "/repos/1" },
    { id: 2, name: "repo2", icon: "📝", title: "repo2", link: "/repos/2" },
    { id: 3, name: "repo3", icon: "📅", title: "repo3", link: "/repos/3" },
    { id: 4, name: "repo4", icon: "⏱️", title: "repo4", link: "/repos/4" },
    { id: 5, name: "repo5", icon: "📊", title: "repo5", link: "/repos/5" },
    { id: 6, name: "repo6", icon: "⚙️", title: "repo6", link: "/repos/6" },
  ];

  return (
    <>
      <div className="header">
        <i>📊</i> DASHBOARD
      </div>
      <ul>
        {repoItems.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(`/repos/${item.id}`)} 
            className="repo-item"
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="footer">Footer text or info</div>
    </>
  );
}

export default RepoSideBar;
