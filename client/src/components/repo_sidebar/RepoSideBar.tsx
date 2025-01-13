import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepos, createRepo } from '../../api/repoApi';
import './RepoSideBar.css';

// 📦 Уніфіковані іконки
const icons = ['📜', '📋', '📅', '📊', '📈', '📉', '📇', '📆', '📋', '📌', '📍', '📎', '📏', '📐', '📒', '📓', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📛', '📜', '📝', '📞', '📟', '📠', '📡', '📢', '📣', '📤', '📥', '📦', '📧', '📨', '📩', '📪', '📫', '📬', '📭', '📮', '📯', '📰', '📱', '📲', '📳', '📴', '📵', '📶', '📷', '📸', '📹', '📺', '📻', '📼', '📽', '📿', '🔀', '🔁', '🔂', '🔃', '🔄', '🔅', '🔆', '🔇', '🔈', '🔉', '🔊', '🔋', '🔌', '🔍', '🔎', '🔏', '🔐', '🔑', '🔒', '🔓', '🔔', '🔕', '🔖', '🔗', '🔘', '🔙', '🔚', '🔛', '🔜', '🔝', '🔞', '🔟', '🔠', '🔡', '🔢', '🔣', '🔤', '🔦', '🔧', '🔨', '🔩', '🔪', '🔫', '🔬', '🔭', '🔮', '🔯', '🔰', '🔱', '🔲', '🔳', '🔴', '🔵', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '🔼', '🔽', '🕉', '🕊', '🕋', '🕌', '🕍', '🕎', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '🕯', '🕰', '🕳', '🕴', '🕵', '🕶', '🕷', '🕸', '🕹', '🕺', '🖇', '🖊', '🖋', '🖌', '🖍', '🖐', '🖕', '🖖', '🖤', '🖥', '🖨', '🖱', '🖲', '🖳', '🖴', '🖵', '🖶', '🖷', '🖸', '🖹', '🖺', '🖻', '🖼', '🖽']

function RepoSideBar() {
  const [repoItems, setRepoItems] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // 📥 Завантаження репозиторіїв
  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await getRepos();
      const updatedRepoData = repoData.map((repo: any) => ({
        ...repo,
        icon: icons[Math.floor(Math.random() * icons.length)]
      }));
      setRepoItems(updatedRepoData);
    };
    fetchRepos();
  }, []);

  // ➕ Створення репозиторію
  const handleCreateRepo = async () => {
    if (!title.trim()) {
      alert('Title is required!');
      return;
    }

    setIsSubmitting(true);

    try {
      const maxId = repoItems.length > 0 ? Math.max(...repoItems.map((repo) => repo.id)) : 0;

      const newRepo = {
        id: maxId + 1,
        title,
        description,
        icon: icons[Math.floor(Math.random() * icons.length)]
      };

      setRepoItems((prevItems) => [newRepo, ...prevItems]);
      await createRepo({ title, description });

      setTitle('');
      setDescription('');
      setShowForm(false);
    } catch (error) {
      console.error('Error creating repo:', error);
      alert('Failed to create repo');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sidebar">
      <h2>Repositories</h2>

      {/* 📂 Список репозиторіїв */}
      <ul className="repo-list">
        {repoItems.map((repo) => (
          <li key={repo.id} onClick={() => navigate(`/repos/${repo.id}`)} className="repo-item">
            <span className="repo-icon">{repo.icon}</span>
            <span className="repo-title">{repo.title}</span>
          </li>
        ))}
      </ul>

      {/* ➕ Фіксована кнопка */}
      <button onClick={() => setShowForm(true)} className="create-button">Create Repo</button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Create New Repository</h3>

            <input
              type="text"
              placeholder="Repo Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Repo Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button 
              onClick={handleCreateRepo} 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Submit'}
            </button>

            <button 
              onClick={() => setShowForm(false)} 
              className="cancel-button"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RepoSideBar;
