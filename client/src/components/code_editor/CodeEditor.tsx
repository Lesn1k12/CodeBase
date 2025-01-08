import React, { useState } from "react";
import Controlled from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript"; // Для підсвічування синтаксису JavaScript
import { EditorView } from "@codemirror/view"; // Для стилізації редактора

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");

  // Функція для обробки зміни в редакторі
  const handleEditorChange = (value: string) => {
    setCode(value); // Оновлюємо стан з новим текстом
  };

  // Функція для виводу тексту в консоль
  const handleButtonClick = () => {
    console.log("Code:", code); // Виводимо текст у консоль
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Code Editor</h2>
      <Controlled
        value={code} 
        onChange={handleEditorChange}
        extensions={[javascript({ jsx: true })]} 
        theme="light"
        style={{
          border: "1px solid #ddd",
          borderRadius: "5px",
          fontSize: "14px",
          height: "300px",
          marginBottom: "20px",
        }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Run Code
      </button>
    </div>
  );
}

export default CodeEditor;
