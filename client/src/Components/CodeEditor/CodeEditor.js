import React, {useState} from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
	const [code, setCode] = useState("");
	const [output, setOutput] = useState("");
	const [isError, setIsError] = useState(false);

	const compileAndRun = async () => {
		try {
			const response = await fetch("http://localhost:5000/compile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code}),
			});

			const data = await response.text();

			// Check for error messages within the response data
			if (data.startsWith("Error:")) {
				setOutput(data);
				setIsError(true);
			} else {
				setOutput(data);
				setIsError(false);
			}
		} catch (err) {
			setOutput("Failed to connect to the server.");
			setIsError(true);
		}
	};

	return (
		<div className="flex h-full w-full bg-gray-900 text-gray-200">
			<div className="w-1/2 p-4 overflow-hidden">
				<h1 className="text-2xl font-bold mb-4 text-green-400">
					Coding Playground
				</h1>
				<Editor
					height="80vh"
					language="cpp"
					value={code}
					onChange={(newCode) => setCode(newCode || "")}
					theme="vs-dark"
					options={{
						fontSize: 16,
						minimap: {enabled: false},
						cursorBlinking: "smooth",
						scrollBeyondLastLine: false,
					}}
					className="shadow-lg border border-green-600"
				/>
				<button
					onClick={compileAndRun}
					className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-800 transition duration-300 ease-in-out rounded shadow-md focus:outline-none">
					Compile & Run
				</button>
			</div>

			<div className="w-1/2 p-4 bg-gray-800 rounded-lg overflow-y-auto">
				<h2 className="text-xl font-semibold mb-4 text-green-400">Output:</h2>
				<pre
					className={`p-4 rounded-md shadow-inner ${
						isError ? "bg-gray-800 text-red-400" : "bg-gray-800 text-green-400"
					}`}
					style={{whiteSpace: "pre-wrap"}}>
					{output}
				</pre>
			</div>
		</div>
	);
}

export default CodeEditor;
