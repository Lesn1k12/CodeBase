import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RepoSideBar from '../../components/repo_sidebar/RepoSideBar';
import RepoContent from '../../components/repo_content/RepoContent';
import { deleteRepo } from '../../api/repoApi';
import { FaTrashAlt, FaFolderPlus, FaFileAlt } from 'react-icons/fa';
import './RepoPage.css';

function RepoPage() {
  const { repoId } = useParams();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDeleteRepo = async () => {
    await deleteRepo(repoId ? parseInt(repoId) : 0);
    navigate('/dashboard');
  };

  const handleAddFileClick = () => setShowModal(true);

  const handleContinueClick = () => {
    navigate(`/edit/${repoId}?fileName=${fileName}`);
    setShowModal(false);
  };

  return (
    <div className="repo-page">
      <RepoSideBar />
      <div className="content">
        <div className="actions">
          <button onClick={handleDeleteRepo} className="delete-button">
            <FaTrashAlt /> Delete
          </button>
          <button className="folder-button">
            <FaFolderPlus /> New Folder
          </button>
          <button onClick={handleAddFileClick} className="file-button">
            <FaFileAlt /> New File
          </button>
        </div>
        <RepoContent repoId={repoId ? parseInt(repoId) : 0} />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter File Name</h2>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <button onClick={handleContinueClick}>Continue</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RepoPage;
