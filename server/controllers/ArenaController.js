const Question = require("../models/Questions");
const path = require("path");
const fs = require("fs");
const {exec} = require("child_process");

const createQuestion = async (req, res) => {
	try {
		const newQuestion = new Question(req.body);
		await newQuestion.save();
		res.status(201).json(newQuestion);
	} catch (error) {
		res.status(400).json({message: error.message});
	}
};

const getAllQuestions = async (req, res) => {
	try {
		const questions = await Question.find();
		res.json(questions);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
};

const getQuestionById = async (req, res) => {
	try {
		const question = await Question.findById(req.params.id);
		if (!question) return res.status(404).json({message: "Question not found"});
		res.json(question);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
};

const updateQuestion = async (req, res) => {
	try {
		const updatedQuestion = await Question.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);
		if (!updatedQuestion)
			return res.status(404).json({message: "Question not found"});
		res.json(updatedQuestion);
	} catch (error) {
		res.status(400).json({message: error.message});
	}
};

const deleteQuestion = async (req, res) => {
	try {
		const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
		if (!deletedQuestion)
			return res.status(404).json({message: "Question not found"});
		res.json({message: "Question deleted"});
	} catch (error) {
		res.status(500).json({message: error.message});
	}
};

const executeCode = (filePath, input) => {
	return new Promise((resolve, reject) => {
		const inputPath = path.join(__dirname, "input.txt");
		const outputPath = path.join(__dirname, "output.txt");
		const executablePath = path.join(__dirname, "output.exe");

		fs.writeFileSync(inputPath, input);
		exec(
			`g++ ${filePath} -o ${executablePath} && ${executablePath} < ${inputPath} > ${outputPath}`,
			(error, stdout, stderr) => {
				if (error) {
					console.error("Compilation or execution error:", stderr);
					return reject(stderr);
				}

				if (!fs.existsSync(outputPath)) {
					return reject("Output file not created");
				}

				try {
					const result = fs.readFileSync(outputPath, "utf8");
					resolve(result);
				} catch (readError) {
					console.error("Error reading output file:", readError);
					reject("Failed to read output file");
				} finally {
					try {
						if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
						if (fs.existsSync(executablePath)) fs.unlinkSync(executablePath);
						if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
					} catch (cleanupError) {
						console.error("Error during cleanup:", cleanupError);
					}
				}
			}
		);
	});
};

const runQuestion = async (req, res) => {
	const {code, examples} = req.body;
	const codePath = path.join(__dirname, "solution.cpp");

	fs.writeFileSync(codePath, code);

	try {
		for (let example of examples) {
			const result = await executeCode(codePath, example.inputText);

			if (result.trim() !== example.outputText.trim()) {
				return res.json({
					status: "Failed",
					message: `Expected: ${example.outputText.trim()}, but got: ${result.trim()}`,
				});
			}
		}
		res.json({status: "Passed", message: "All examples passed successfully."});
	} catch (error) {
		res.json({status: "Failed", message: error.toString()});
	}
};

const submitQuestion = async (req, res) => {
	const {code, testCases} = req.body;

	console.log("Received testCases:", testCases);

	const codePath = path.join(__dirname, "solution.cpp");

	fs.writeFileSync(codePath, code);

	try {
		if (!Array.isArray(testCases)) {
			return res.json({
				status: "Failed",
				message: "testCases should be an array.",
			});
		}

		for (let testCase of testCases) {
			const result = await executeCode(codePath, testCase.inputText);

			if (result.trim() !== testCase.expectedOutput.trim()) {
				return res.json({
					status: "Failed",
					message: `Some Test cases failed`,
				});
			}
		}

		res.json({
			status: "Passed",
			message: "All test cases passed successfully.",
		});
	} catch (error) {
		console.error("Error during submission:", error);
		res.json({
			status: "Failed",
			message: "You have have error in your code , Please Try Again",
		});
	}
};

module.exports = {
	createQuestion,
	getAllQuestions,
	getQuestionById,
	updateQuestion,
	deleteQuestion,
	runQuestion,
	submitQuestion,
};
