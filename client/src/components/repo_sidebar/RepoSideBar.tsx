import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRepos } from "../../api/repoApi";
import "./repoSideBar.css";

const icons = ['📁', '📂', '🗂️', '📑', '📄'];

function RepoSideBar() {
  const [repoItems, setRepoItems] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoData = await getRepos();
        console.log("Fetched repo data:", repoData); 
        const updatedRepoData = repoData.map((repo: any) => ({
          ...repo,
          icon: icons[Math.floor(Math.random() * icons.length)],
          link: `/repos/${repo.id}`
        }));
        setRepoItems(updatedRepoData);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div className="header">
        <i>📊</i> DASHBOARD
      </div>
      <ul>
        {repoItems.length > 0 ? (
          repoItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(`/repos/${item.id}`)}
              className="repo-item"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))
        ) : (
          <li>No repositories found</li>
        )}
      </ul>
      <div className="footer">Footer text or info</div>
    </>
  );
}

export default RepoSideBar;
