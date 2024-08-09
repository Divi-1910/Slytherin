import React, {useState} from "react";
import {Editor} from "@monaco-editor/react";

const CodeEditor = () => {
	const [code, setCode] = useState("");
	const [output, setOutput] = useState("");
	const [error, setError] = useState("");

	const handleCompile = async () => {
		try {
			const response = await fetch("http://localhost:3001/compile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code}),
			});

			const result = await response.json();

			if (response.ok) {
				setOutput(result.output);
				setError("");
			} else {
				setError(result.error);
				setOutput("");
			}
		} catch (err) {
			setError("Failed to connect to the server.");
			setOutput("");
		}
	};

	return (
		<div className="code-editor-container">
			<h1>C++ Code Editor</h1>
			<Editor
				height="200px"
				language="cpp"
				theme="vs-dark"
				value={code}
				onChange={(value) => setCode(value || "")}
			/>
			<button onClick={handleCompile}>Compile and Run</button>
			<div className="output-container">
				<h2>Output:</h2>
				{output && <pre>{output}</pre>}
				{error && <pre className="error">{error}</pre>}
			</div>
		</div>
	);
};

export default CodeEditor;
