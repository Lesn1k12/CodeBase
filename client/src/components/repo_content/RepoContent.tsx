import React, { useEffect, useState } from 'react';
import { getRepo } from '../../api/repoApi';
import { FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa'; // Іконки для папок і файлів
import './RepoContent.css';

interface RepoContentProps {
  repoId: number;
}

function RepoContent({ repoId }: RepoContentProps) {
  const [repo, setRepo] = useState<any>(null);
  const [openDirectories, setOpenDirectories] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchRepo = async () => {
      const repoData = await getRepo(repoId);
      setRepo(repoData);
    };

    fetchRepo();
  }, [repoId]);

  const toggleDirectory = (directoryId: number) => {
    setOpenDirectories((prev) => ({
      ...prev,
      [directoryId]: !prev[directoryId],
    }));
  };

  return (
    <div className="repo-container">
      <h1 className="repo-title">{repo?.title || 'Loading Repository...'}</h1>
      <p className="repo-description">{repo?.description}</p>
      <p><strong>Created at:</strong> {repo?.created_at}</p>

      <h3>📂 Directories:</h3>
      {repo?.directories.map((directory: any) => (
        <div key={directory.directory_id} className="directory" onClick={() => toggleDirectory(directory.directory_id)}>
          <span className="directory-icon">
            {openDirectories[directory.directory_id] ? <FaFolderOpen /> : <FaFolder />}
          </span>
          <span className="directory-title">{directory.directory_title}</span>

          {openDirectories[directory.directory_id] && (
            <ul className="file-list">
              {directory.files.map((file: any) => (
                <li key={file.file_id} className="file-item">
                  <span className="file-icon"><FaFileAlt /></span>
                  <span className="file-title">{file.file_title}</span>
                  <pre className="file-content">{file.content}</pre>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default RepoContent;
