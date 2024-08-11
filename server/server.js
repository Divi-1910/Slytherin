const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
	.connect("mongodb://localhost:27017/slytherin", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

const playgroundRoutes = require("./routes/Playground");
const arenaRoutes = require("./routes/Arena");

app.use("/api/playground", playgroundRoutes);
app.use("/api/arena", arenaRoutes);

app.listen(5000, () =>
	console.log("Server is running on http://localhost:5000")
);
