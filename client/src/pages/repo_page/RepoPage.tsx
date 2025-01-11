import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './repoPage.css';
import RepoSideBar from '../../components/repo_sidebar/RepoSideBar';
import RepoContent from '../../components/repo_content/RepoContent';

import { deleteRepo } from '../../api/repoApi';

function RepoPage() {
  const { repoId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleAddFileClick = () => {
    setShowModal(true);
  };

  const handleContinueClick = () => {
    setShowModal(false);
    navigate(`/edit/${repoId}?fileName=${fileName}`);
  };

  return (
    <div className="container">
      <div className="left sidebar">
        <RepoSideBar />
      </div>
      <main className="center">
        <div className="repo_options">
          <button onClick={handleAddFileClick}>Add New File</button>
          <button onClick={() => deleteRepo(repoId ? parseInt(repoId) : 0)}>delete repo</button>
        </div>
        <div className="repo_content">
          <RepoContent repoId={repoId ? parseInt(repoId) : 0} />
        </div>
      </main>

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