import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  fileName: string; // Додаємо параметр для визначення типу мови
}

// Функція для визначення мови за розширенням файлу
const getLanguageFromExtension = (fileName: string): string => {
  const extension = fileName.split('.').pop();

  switch (extension) {
    case 'js':
    case 'jsx':
      return 'javascript';
    case 'ts':
    case 'tsx':
      return 'typescript';
    case 'py':
      return 'python';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    case 'java':
      return 'java';
    case 'cpp':
    case 'cc':
    case 'cxx':
    case 'c':
      return 'cpp';
    case 'md':
      return 'markdown';
    case 'xml':
      return 'xml';
    case 'php':
      return 'php';
    default:
      return 'plaintext'; 
  }
};

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, fileName }) => {
  const language = getLanguageFromExtension(fileName);

  return (
    <Editor
      height="500px"
      defaultLanguage={language} // Визначаємо мову динамічно
      value={value}
      onChange={(value) => onChange(value || '')}
      theme="vs-light"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: 'on',
        tabSize: 4,
        insertSpaces: true,
      }}
    />
  );
};

export default CodeEditor;








