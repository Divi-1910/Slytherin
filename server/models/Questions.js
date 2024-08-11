const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
	inputText: {type: String, required: true},
	outputText: {type: String, required: true},
	explanation: {type: String},
});

const testCaseSchema = new mongoose.Schema({
	inputText: {type: String, required: true},
	expectedOutput: {type: String, required: true},
	explanation: {type: String},
});

const questionSchema = new mongoose.Schema({
	title: {type: String, required: true},
	problemStatement: {type: String, required: true},
	examples: [exampleSchema],
	constraints: {type: String, required: true},
	difficulty: {type: String, required: true},
	testCases: [testCaseSchema],
	createdAt: {type: Date, default: Date.now},
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
