import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Editor from "@monaco-editor/react";

const QuestionDetail = () => {
	const {id} = useParams();
	const [theme, setTheme] = useState("dark");
	const [code, setCode] = useState("");
	const [output, setOutput] = useState("");
	const [problem, setProblem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [submissionStatus, setSubmissionStatus] = useState("");

	useEffect(() => {
		const fetchProblem = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/arena/questions/${id}`
				);
				if (!response.ok) {
					throw new Error("Problem not found");
				}
				const data = await response.json();
				setProblem(data);
			} catch (error) {
				console.error("Error fetching problem:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProblem();
	}, [id]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const runSolution = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/arena/questions/run",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({code, examples: problem.examples}),
				}
			);

			const data = await response.json();
			setSubmissionStatus(data.status);
			setOutput(data.message);
		} catch (error) {
			console.error("Error running solution:", error);
			setSubmissionStatus("Error");
			setOutput("Failed to connect to the server.");
		}
	};

	const submitSolution = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/arena/questions/submit",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						code,
						testCases: problem.testCases,
					}),
				}
			);

			const data = await response.json();
			setSubmissionStatus(data.status);
			setOutput(data.message);
		} catch (error) {
			console.error("Error submitting solution:", error);
			setSubmissionStatus("Error");
			setOutput("Failed to connect to the server.");
		}
	};

	if (loading) {
		return <div className="p-4">Loading...</div>;
	}

	if (!problem) {
		return <div className="p-4">Problem not found.</div>;
	}

	const getStatusStyles = () => {
		switch (submissionStatus) {
			case "Accepted":
			case "Passed":
				return "bg-green-100 text-green-800";
			case "Rejected":
			case "Failed":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div
			className={`flex flex-col h-screen ${
				theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
			}`}>
			<div className="relative flex flex-1 overflow-hidden">
				{/* Problem Section */}
				<div className="p-4 w-1/2 overflow-y-auto border-r border-gray-300">
					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className="absolute top-4 right-4 p-2 rounded bg-blue-500 text-white">
						Toggle Theme
					</button>

					{/* Problem heading */}
					<div className="w-full">
						<div className="text-2xl font-semibold mb-4">{problem.title}</div>
						{problem && (
							<div className="flex items-center mb-4">
								<div className="bg-olive text-olive inline-block rounded-full bg-opacity-20 px-3 py-1 text-xs font-medium capitalize">
									Easy
								</div>
							</div>
						)}

						{/* Problem Statement */}
						<div
							className={`mb-4 p-4 rounded border ${
								theme === "dark"
									? "bg-gray-800 text-white border-gray-600"
									: "bg-gray-200 text-black border-gray-400"
							}`}>
							{problem.problemStatement}
						</div>

						{/* Examples */}
						<div className="mb-4">
							{problem.examples.map((example, index) => (
								<div key={example._id} className="mb-4">
									<p className="font-medium">Example {index + 1}:</p>
									<pre
										className={`p-4 rounded border ${
											theme === "dark"
												? "bg-gray-800 border-gray-600"
												: "bg-gray-200 border-gray-400"
										}`}>
										<strong>Input: </strong>{" "}
										{typeof example.inputText === "object"
											? JSON.stringify(example.inputText)
											: example.inputText}
										<br />
										<strong>Output:</strong>{" "}
										{typeof example.outputText === "object"
											? JSON.stringify(example.outputText)
											: example.outputText}
										<br />
										{example.explanation && (
											<>
												<strong>Explanation:</strong>{" "}
												{typeof example.explanation === "object"
													? JSON.stringify(example.explanation)
													: example.explanation}
											</>
										)}
									</pre>
								</div>
							))}
						</div>

						{/* Constraints */}
						<div
							className={`p-4 rounded border ${
								theme === "dark"
									? "bg-gray-800 text-white border-gray-600"
									: "bg-gray-200 text-black border-gray-400"
							}`}>
							<strong>Constraints:</strong>
							<p className="ml-5 mt-2">{problem.constraints}</p>
						</div>
					</div>
				</div>

				{/* Code Editor Section */}
				<div className="flex flex-col w-1/2 h-full border-l border-gray-300">
					<Editor
						height="calc(100% - 120px)"
						language="cpp"
						value={code}
						onChange={(newCode) => setCode(newCode)}
						theme={theme === "dark" ? "vs-dark" : "light"}
						className="flex-1 border border-gray-300"
					/>
					<div className="flex justify-around mt-4">
						<button
							onClick={runSolution}
							className="px-3 py-1 bg-green-500 text-white rounded">
							Run
						</button>
						<button
							onClick={submitSolution}
							className="px-3 py-1 bg-green-500 text-white rounded">
							Submit
						</button>
					</div>
					<div
						className={`mt-4 p-2 rounded border border-gray-300 h-40 overflow-auto ${getStatusStyles()}`}>
						<p className="font-semibold">{submissionStatus}</p>
						<pre>
							{typeof output === "object"
								? JSON.stringify(output, null, 2)
								: output}
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionDetail;
