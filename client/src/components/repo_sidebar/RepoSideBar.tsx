import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepos, createRepo } from '../../api/repoApi';
import './RepoSideBar.css';

// Додамо набір іконок для репозиторіїв
const icons = ['📁', '📂', '🗂️', '📑', '📄'];

function RepoSideBar() {
  const [repoItems, setRepoItems] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await getRepos();
      // Додаємо іконку до кожного репозиторію
      const updatedRepoData = repoData.map((repo: any) => ({
        ...repo,
        icon: icons[Math.floor(Math.random() * icons.length)]
      }));
      setRepoItems(updatedRepoData);
    };
    fetchRepos();
  }, []);

  const handleCreateRepo = async () => {
    await createRepo({ title, description });
    const repoData = await getRepos();
    const updatedRepoData = repoData.map((repo: any) => ({
      ...repo,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setRepoItems(updatedRepoData);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="sidebar">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repoItems.map((repo) => (
          <li key={repo.id} onClick={() => navigate(`/repos/${repo.id}`)} className="repo-item">
            <span className="repo-icon">{repo.icon}</span> {/* Іконка */}
            <span className="repo-title">{repo.title}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleCreateRepo} className="create-button">Create</button>
    </div>
  );
}

export default RepoSideBar;
