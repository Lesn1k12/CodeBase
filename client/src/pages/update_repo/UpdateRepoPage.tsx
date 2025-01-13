import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CodeEditor from '../../components/code_editor/CodeEditor';
import { updateRepo } from '../../api/repoApi';
import './UpdateRepoPage.css';

function UpdateRepoPage() {
  const { repoId } = useParams<{ repoId: string }>();  // ✅ Використовуємо repoId
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get('fileName') || 'Untitled';
  const [code, setCode] = useState<string>('');
  const navigate = useNavigate();

  // Перевірка, чи передається repoId
  useEffect(() => {
    if (!repoId) {
      console.warn('Repository ID is missing!');
    } else {
      console.log('Repo ID:', repoId);
    }
  }, [repoId]);

  const handleSave = async () => {
    if (!repoId) {
      alert("Repository ID is missing!");
      return;
    }

    try {
      const response = await updateRepo(Number(repoId), { fileName, content: code });
      if (response) {
        alert('File saved successfully!');
        navigate(-1);
      } else {
        alert('Failed to save the file.');
      }
    } catch (error) {
      console.error('Error while saving:', error);
      alert('Error occurred while saving the file.');
    }
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard changes?")) {
      navigate(-1);
    }
  };

  return (
    <div className="editor-container">
      <div className="top-bar">
        <span className="file-name">{fileName}</span>
        <div className="buttons">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="discard-button" onClick={handleDiscard}>Discard</button>
        </div>
      </div>
      <div className="code-editor">
        <CodeEditor value={code} onChange={setCode} fileName={fileName} />
      </div>
    </div>
  );
}

export default UpdateRepoPage;

