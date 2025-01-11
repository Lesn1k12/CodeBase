import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CodeEditor from '../../components/code_editor/CodeEditor';
import { updateRepo } from '../../api/repoApi';
import './UpdateRepoPage.css';

function UpdateRepoPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get('fileName') || 'Untitled';
  const [code, setCode] = useState<string>(''); 
  const navigate = useNavigate();

  const handleSave = async () => {
    if (id) {
      await updateRepo(Number(id), { fileName, content: code });
      alert('File saved successfully!');
      navigate(-1);
    }
  };

  const handleDiscard = () => {
    if (window.confirm("Discard changes?")) {
      navigate(-1);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <h2>{fileName}</h2>
      </div>

      <div className="options">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="discard-button" onClick={handleDiscard}>Discard</button>
      </div>

      <div className="editor-wrapper">
        <CodeEditor value={code} onChange={setCode} />
      </div>
    </div>
  );
}

export default UpdateRepoPage;


