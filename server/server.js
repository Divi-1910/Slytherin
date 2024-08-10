// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const {exec} = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/compile", (req, res) => {
// 	const code = req.body.code;
// 	const filePath = path.join(__dirname, "code.cpp");
// 	const outputPath = path.join(__dirname, "output");

// 	fs.writeFileSync(filePath, code);

// 	const command =
// 		process.platform === "win32"
// 			? `g++ "${filePath}" -o "${outputPath}" && "${outputPath}.exe"`
// 			: `g++ "${filePath}" -o "${outputPath}" && ./output`;

// 	const startTime = process.hrtime();

// 	exec(command, (err, stdout, stderr) => {
// 		const endTime = process.hrtime(startTime);
// 		const executionTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds

// 		const memoryUsage = process.memoryUsage();
// 		const memoryUsageInMB = {
// 			memory_used: (memoryUsage.rss / 1024 / 1024).toFixed(2),
// 		};

// 		if (err) {
// 			res.send(`Error:\n${stderr}`);
// 		} else {
// 			res.send(
// 				`\n${stdout}\nExecution Time: ${executionTime.toFixed(
// 					3
// 				)} ms\nMemory Usage (in MB): ${memoryUsageInMB.memory_used} MB`
// 			);
// 		}
// 	});
// });

// app.listen(5000, () =>
// 	console.log("Server is running on http://localhost:5000")
// );

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {exec} = require("child_process");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/compile", (req, res) => {
	const code = req.body.code;
	const input = req.body.input || ""; // Retrieve the user input
	const codeFilePath = path.join(__dirname, "code.cpp");
	const outputFilePath = path.join(__dirname, "output");
	const inputFilePath = path.join(__dirname, "input.txt");

	// Write the code and input to files
	fs.writeFileSync(codeFilePath, code);
	fs.writeFileSync(inputFilePath, input);

	// Command to compile and run the code with input redirection
	const command =
		process.platform === "win32"
			? `g++ "${codeFilePath}" -o "${outputFilePath}" && "${outputFilePath}.exe" < "${inputFilePath}"`
			: `g++ "${codeFilePath}" -o "${outputFilePath}" && ./output < "${inputFilePath}"`;

	const startTime = process.hrtime();

	exec(command, (err, stdout, stderr) => {
		const endTime = process.hrtime(startTime);
		const executionTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds

		const memoryUsage = process.memoryUsage();
		const memoryUsageInMB = {
			memory_used: (memoryUsage.rss / 1024 / 1024).toFixed(2),
		};

		// Clean up the generated files
		fs.unlinkSync(codeFilePath);
		fs.unlinkSync(
			outputFilePath + (process.platform === "win32" ? ".exe" : "")
		);
		fs.unlinkSync(inputFilePath);

		if (err) {
			res.status(500).send(`Error:\n${stderr}`);
		} else {
			res.send(
				`\n${stdout}\nExecution Time: ${executionTime.toFixed(
					3
				)} ms\nMemory Usage (in MB): ${memoryUsageInMB.memory_used} MB`
			);
		}
	});
});

app.listen(5000, () =>
	console.log("Server is running on http://localhost:5000")
);
