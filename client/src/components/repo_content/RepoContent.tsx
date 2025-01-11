import React, { useEffect, useState } from 'react';
import { getRepo } from '../../api/repoApi';
import { FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import parserBabel from 'prettier/parser-babel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './RepoContent.css';

interface RepoContentProps {
  repoId: number;
}

function RepoContent({ repoId }: RepoContentProps) {
  const [repo, setRepo] = useState<any>(null);
  const [openDirectories, setOpenDirectories] = useState<{ [key: number]: boolean }>({});
  const [fileContents, setFileContents] = useState<{ [key: number]: string }>({});

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

  // Асинхронне завантаження вмісту файлу
  const loadFileContent = async (fileId: number, content: any) => {
    if (fileContents[fileId]) return; // Якщо вже завантажено

    try {
      const resolvedContent = await Promise.resolve(content); // Чекаємо, якщо Promise
      const formattedContent = await formatCode(resolvedContent, 'file'); // Форматуємо вміст
      setFileContents((prev) => ({
        ...prev,
        [fileId]: formattedContent,
      }));
    } catch (error) {
      console.error('Error loading file content:', error);
    }
  };

  return (
    <div className="repo-container">
      <h1 className="repo-title">{repo?.title || 'Loading Repository...'}</h1>
      <p className="repo-description">{repo?.description}</p>
      <p><strong>Created at:</strong> {repo?.created_at}</p>

      <h3 className="directory-heading">📂 Directories:</h3>
      {repo?.directories.map((directory: any) => (
        <div key={directory.directory_id} className="directory">
          <div className="directory-header" onClick={() => toggleDirectory(directory.directory_id)}>
            {openDirectories[directory.directory_id] ? <FaFolderOpen /> : <FaFolder />}
            <span>{directory.directory_title}</span>
          </div>

          {openDirectories[directory.directory_id] && (
            <ul className="file-list">
              {directory.files.map((file: any) => (
                <li
                  key={file.file_id}
                  className="file-item"
                  onClick={() => loadFileContent(file.file_id, file.content)}
                >
                  <FaFileAlt className="file-icon" />
                  <span>{file.file_title}</span>

                  {/* Вивід контенту */}
                  {fileContents[file.file_id] ? (
                    <SyntaxHighlighter
                      language={detectLanguage(file.file_title)}
                      style={vscDarkPlus}
                      wrapLongLines={true}
                      className="code-block"
                    >
                      {fileContents[file.file_id]}
                    </SyntaxHighlighter>
                  ) : (
                    <p>📄 Click to load content...</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Визначення мови підсвітки
const detectLanguage = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';
  switch (extension) {
    case 'html':
      return 'html';
    case 'js':
    case 'jsx':
      return 'javascript';
    case 'ts':
    case 'tsx':
      return 'typescript';
    case 'py':
      return 'python';
    case 'css':
      return 'css';
    case 'rs':
      return 'rust';
    case 'json':
      return 'json';
    default:
      return 'text';
  }
};

// Форматування коду
const formatCode = (code: string, fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';

  try {
    if (extension === 'html') {
      return prettier.format(code, {
        parser: 'html',
        plugins: [parserHtml],
        tabWidth: 4,
      });
    } else if (['js', 'jsx', 'ts', 'tsx'].includes(extension)) {
      return prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
        tabWidth: 4,
      });
    }
  } catch (error) {
    console.error('Error formatting code:', error);
  }

  return String(code);
};

export default RepoContent;

