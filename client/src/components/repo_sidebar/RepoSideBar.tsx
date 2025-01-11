import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepos, createRepo } from '../../api/repoApi';
import './repoSideBar.css';

const icons = ['📁', '📂', '🗂️', '📑', '📄'];

function RepoSideBar() {
  const [repoItems, setRepoItems] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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

  const handleCreateRepoClick = () => {
    setShowModal(true);
  };

  const handleCreateClick = async () => {
    await createRepo({ title, description });
    setShowModal(false);
    // Optionally, you can refresh the repo list after creating a new repo
    const repoData = await getRepos();
    const updatedRepoData = repoData.map((repo: any) => ({
      ...repo,
      icon: icons[Math.floor(Math.random() * icons.length)],
      link: `/repos/${repo.id}`
    }));
    setRepoItems(updatedRepoData);
  };

  return (
    <>
      <div className="header">
        <i>📊</i> DASHBOARD
        <button onClick={handleCreateRepoClick}>Create Repo</button>
      </div>
      <ul>
        {repoItems.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(item.link)} 
            className="repo-item"
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="footer">Footer text or info</div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Repository</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleCreateClick}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default RepoSideBar;