const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/compile', (req, res) => {
  const code = req.body.code;
  const filePath = path.join(__dirname, 'code.cpp');
  const outputPath = path.join(__dirname, 'output');

  fs.writeFileSync(filePath, code);

  const command = process.platform === 'win32'
    ? `g++ "${filePath}" -o "${outputPath}" && "${outputPath}.exe"`
    : `g++ "${filePath}" -o "${outputPath}" && ./output`;

  const startTime = process.hrtime();  // Start measuring time

  exec(command, (err, stdout, stderr) => {
    const endTime = process.hrtime(startTime);  // End measuring time
    const executionTime = endTime[0] * 1000 + endTime[1] / 1000000;  // Convert to milliseconds

    const memoryUsage = process.memoryUsage();
    const memoryUsageInMB = {
      rss: (memoryUsage.rss / 1024 / 1024).toFixed(2),       
      heapTotal: (memoryUsage.heapTotal / 1024 / 1024).toFixed(2),
      heapUsed: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2),
      external: (memoryUsage.external / 1024 / 1024).toFixed(2),
    };

    if (err) {
      res.send(`Error:\n${stderr}`);
    } else {
      res.send(`Output:\n${stdout}\nExecution Time: ${executionTime.toFixed(3)} ms\nMemory Usage (in MB): ${JSON.stringify(memoryUsageInMB, null, 2)}`);
    }
  });
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/compile', (req, res) => {
//   const code = req.body.code;
//   const filePath = path.join(__dirname, 'code.cpp');
//   const outputPath = path.join(__dirname, 'output.exe');  // For Windows

//   // Save the C++ code to a file
//   fs.writeFileSync(filePath, code);

//   // Command to compile the C++ code
//   const compileCommand = `g++ "${filePath}" -o "${outputPath}"`;

//   // Command to measure memory usage using PowerShell
//   const measureMemoryCommand = `powershell.exe -File "${path.join(__dirname, 'measure-memory.ps1')}" -ExecutablePath "${outputPath}"`;

//   const startTime = process.hrtime();  // Start measuring time

//   // Compile the C++ code
//   exec(compileCommand, (compileErr) => {
//     if (compileErr) {
//       return res.send(`Error during compilation:\n${compileErr}`);
//     }

//     // Run the executable and measure memory usage
//     exec(measureMemoryCommand, (err, stdout, stderr) => {
//       const endTime = process.hrtime(startTime);  // End measuring time
//       const executionTime = endTime[0] * 1000 + endTime[1] / 1000000;  // Convert to milliseconds

//       if (err) {
//         return res.send(`Error during execution:\n${stderr}`);
//       }

//       // Output the result including memory usage
//       res.send(`Output:\n${stdout}\nExecution Time: ${executionTime.toFixed(3)} ms`);
//     });
//   });
// });

// app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
