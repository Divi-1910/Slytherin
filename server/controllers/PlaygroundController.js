const {exec} = require("child_process");
const fs = require("fs");
const path = require("path");

const compileCode = (req, res) => {
	const code = req.body.code;
	const input = req.body.input || "";
	const codeFilePath = path.join(__dirname, "../code.cpp");
	const outputFilePath = path.join(__dirname, "../output");
	const inputFilePath = path.join(__dirname, "../input.txt");

	fs.writeFileSync(codeFilePath, code);
	fs.writeFileSync(inputFilePath, input);

	const command =
		process.platform === "win32"
			? `g++ "${codeFilePath}" -o "${outputFilePath}" && "${outputFilePath}.exe" < "${inputFilePath}"`
			: `g++ "${codeFilePath}" -o "${outputFilePath}" && ./output < "${inputFilePath}"`;

	const startTime = process.hrtime();

	exec(command, (err, stdout, stderr) => {
		const endTime = process.hrtime(startTime);
		const executionTime = endTime[0] * 1000 + endTime[1] / 1000000;

		const memoryUsage = process.memoryUsage();
		const memoryUsageInMB = {
			memory_used: (memoryUsage.rss / 1024 / 1024).toFixed(2),
		};

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
};

module.exports = {compileCode};
