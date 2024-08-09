import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const compileAndRun = async () => {
    const response = await fetch('http://localhost:5000/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.text();
    setOutput(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Editor
        height="50vh"
        language="cpp"
        value={code}
        onChange={(newCode) => setCode(newCode)}
        theme="vs-dark"
      />
      <button onClick={compileAndRun}>Compile & Run</button>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeEditor;
