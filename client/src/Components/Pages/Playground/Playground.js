import React, {useState} from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
	const [code, setCode] = useState("");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [isError, setIsError] = useState(false);

	const compileAndRun = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/playground/compile",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({code, input}),
				}
			);

			const data = await response.text();

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
				<div className="flex justify-between">
					<h1 className="text-2xl font-bold mb-4 text-green-400">
						Coding Playground (C++)
					</h1>
				</div>
				<Editor
					height="60vh"
					language="cpp"
					value={code}
					onChange={(newCode) => setCode(newCode || "")}
					theme="vs-dark"
					options={{
						fontSize: 16,
						minimap: {enabled: false},
						cursorBlinking: "smooth",
						scrollBeyondLastLine: false,
						wordWrap: "on",
						automaticLayout: true,
						quickSuggestions: true,
						suggestOnTriggerCharacters: true,
						autoClosingBrackets: "always",
						autoClosingQuotes: "always",
					}}
					className="shadow-lg border border-green-600"
				/>
				<textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter input here..."
					className="w-full mt-2 p-2 bg-gray-800 border border-green-600 rounded-md text-gray-200"
					rows="4"
					style={{resize: "vertical"}} // Allow vertical resizing
				></textarea>
				<div className="flex justify-between mt-4">
					<button
						onClick={compileAndRun}
						className="px-6 py-2 bg-green-700 hover:bg-green-800 transition-all ease-in-out duration-300 rounded shadow-md focus:outline-none hover:translate-y-1 active:scale-95">
						Compile & Run
					</button>
				</div>
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

function Playground() {
	return (
		<div>
			<CodeEditor />
		</div>
	);
}

export default Playground;
