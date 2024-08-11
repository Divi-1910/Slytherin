import React, {useState} from "react";
import {createQuestion} from "../../../services/api";
import {useNavigate} from "react-router-dom";

const AddQuestion = () => {
	const [title, setTitle] = useState("");
	const [problemStatement, setProblemStatement] = useState("");
	const [examples, setExamples] = useState([
		{inputText: "", outputText: "", explanation: ""},
	]);
	const [constraints, setConstraints] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [testCases, setTestCases] = useState([
		{inputText: "", expectedOutput: "", explanation: ""},
	]);
	const navigate = useNavigate();

	const handleExampleChange = (index, field, value) => {
		const newExamples = [...examples];
		newExamples[index][field] = value;
		setExamples(newExamples);
	};

	const handleTestCaseChange = (index, field, value) => {
		const newTestCases = [...testCases];
		newTestCases[index][field] = value;
		setTestCases(newTestCases);
	};

	const addExample = () => {
		setExamples([
			...examples,
			{inputText: "", outputText: "", explanation: ""},
		]);
	};

	const addTestCase = () => {
		setTestCases([
			...testCases,
			{inputText: "", expectedOutput: "", explanation: ""},
		]);
	};

	const removeExample = (index) => {
		setExamples(examples.filter((_, i) => i !== index));
	};

	const removeTestCase = (index) => {
		setTestCases(testCases.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const questionData = {
			title,
			problemStatement,
			examples,
			constraints,
			difficulty,
			testCases,
		};
		try {
			await createQuestion(questionData);
			navigate("/arena");
		} catch (error) {
			console.error("Error creating question:", error);
		}
	};

	return (
		<div className="p-6 bg-gray-900 text-white min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-green-400">
				Add New Question
			</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Title
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
						required
					/>
				</div>
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Problem Statement
					</label>
					<textarea
						value={problemStatement}
						onChange={(e) => setProblemStatement(e.target.value)}
						className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
						required
					/>
				</div>
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Examples
					</label>
					{examples.map((example, index) => (
						<div
							key={index}
							className="mb-4 p-4 border border-gray-700 rounded bg-gray-800">
							<input
								type="text"
								placeholder="Input"
								value={example.inputText}
								onChange={(e) =>
									handleExampleChange(index, "inputText", e.target.value)
								}
								className="w-full p-3 mb-2 border border-gray-600 rounded bg-gray-700 text-white"
								required
							/>
							<input
								type="text"
								placeholder="Output"
								value={example.outputText}
								onChange={(e) =>
									handleExampleChange(index, "outputText", e.target.value)
								}
								className="w-full p-3 mb-2 border border-gray-600 rounded bg-gray-700 text-white"
								required
							/>
							<input
								type="text"
								placeholder="Explanation (optional)"
								value={example.explanation}
								onChange={(e) =>
									handleExampleChange(index, "explanation", e.target.value)
								}
								className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white"
							/>
							<button
								type="button"
								onClick={() => removeExample(index)}
								className="mt-2 text-red-500 hover:text-red-300">
								Remove Example
							</button>
						</div>
					))}
					<button
						type="button"
						onClick={addExample}
						className="bg-green-600 text-white px-4 py-2 rounded mt-2">
						Add Another Example
					</button>
				</div>
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Constraints
					</label>
					<textarea
						value={constraints}
						onChange={(e) => setConstraints(e.target.value)}
						className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
						required
					/>
				</div>
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Difficulty
					</label>
					<select
						value={difficulty}
						onChange={(e) => setDifficulty(e.target.value)}
						className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
						required>
						<option value="" disabled>
							Select Difficulty
						</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>
				<div>
					<label className="block font-semibold mb-2 text-gray-300">
						Test Cases
					</label>
					{testCases.map((testCase, index) => (
						<div
							key={index}
							className="mb-4 p-4 border border-gray-700 rounded bg-gray-800">
							<input
								type="text"
								placeholder="Input"
								value={testCase.inputText}
								onChange={(e) =>
									handleTestCaseChange(index, "inputText", e.target.value)
								}
								className="w-full p-3 mb-2 border border-gray-600 rounded bg-gray-700 text-white"
								required
							/>
							<input
								type="text"
								placeholder="Expected Output"
								value={testCase.expectedOutput}
								onChange={(e) =>
									handleTestCaseChange(index, "expectedOutput", e.target.value)
								}
								className="w-full p-3 mb-2 border border-gray-600 rounded bg-gray-700 text-white"
								required
							/>
							<input
								type="text"
								placeholder="Explanation (optional)"
								value={testCase.explanation}
								onChange={(e) =>
									handleTestCaseChange(index, "explanation", e.target.value)
								}
								className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white"
							/>
							<button
								type="button"
								onClick={() => removeTestCase(index)}
								className="mt-2 text-red-500 hover:text-red-300">
								Remove Test Case
							</button>
						</div>
					))}
					<button
						type="button"
						onClick={addTestCase}
						className="bg-green-600 text-white px-4 py-2 rounded mt-2">
						Add Another Test Case
					</button>
				</div>
				<button
					type="submit"
					className="bg-green-600 text-white px-6 py-3 rounded text-xl">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddQuestion;
