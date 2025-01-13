import React, { useEffect, useState } from "react";
import { getRepo } from "../../api/repoApi";
import { FaFolder, FaFolderOpen, FaFileAlt } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./RepoContent.css";

interface RepoContentProps {
  repoId: number;
}

function RepoContent({ repoId }: RepoContentProps) {
  const [repo, setRepo] = useState<any>(null);
  const [openDirectories, setOpenDirectories] = useState<{
    [key: number]: boolean;
  }>({});

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
      <h1 className="repo-title">{repo?.title || "Loading Repository..."}</h1>
      <p className="repo-description">{repo?.description}</p>
      <p>
        <strong>Created at:</strong> {repo?.created_at}
      </p>

      <h3 className="directory-heading">📂 Directories:</h3>

      <div className="directories-container">
        {repo?.directories.map((directory: any) => (
          <div key={directory.directory_id} className="directory">
            <div
              className="directory-header"
              onClick={() => toggleDirectory(directory.directory_id)}
            >
              {openDirectories[directory.directory_id] ? (
                <FaFolderOpen />
              ) : (
                <FaFolder />
              )}
              <span>{directory.directory_title}</span>
            </div>

            {openDirectories[directory.directory_id] && (
              <ul className="file-list">
                {directory.files.map((file: any) => (
                  <li key={file.file_id} className="file-item">
                    <div className="file-header">
                      <FaFileAlt className="file-icon" />
                      <span>{file.file_title}</span>
                    </div>

                    <SyntaxHighlighter
                      language={detectLanguage(file.file_title)}
                      style={vscDarkPlus}
                      wrapLongLines={true}
                      className="code-block"
                      showLineNumbers={true}
                    >
                      {file.content}
                    </SyntaxHighlighter>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const detectLanguage = (fileName: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  switch (extension) {
    case "html":
      return "html";
    case "js":
    case "jsx":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "py":
      return "python";
    case "css":
      return "css";
    case "json":
      return "json";
    default:
      return "text";
  }
};

export default RepoContent;
