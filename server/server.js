const express = require("express");
const fs = require("fs");
const {exec} = require("child_process");
const app = express();

// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded);

app.post("/compile", (req, res) => {
	const code = req.body.code;

	if (!code) {
		return res.status(400).send("Code is required.");
	}

	const filePath = "./tempCode.cpp";

	fs.writeFile(filePath, code, (err) => {
		if (err) {
			return res.status(500).send("Failed to write code to file.");
		}

		exec(`g++ ${filePath} -o output && ./output`, (error, stdout, stderr) => {
			if (error) {
				return res.status(500).send(stderr);
			}
			res.send({output: stdout});
		});
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
