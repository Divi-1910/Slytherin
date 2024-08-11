const express = require("express");
const router = express.Router();
const PlaygroundController = require("../controllers/PlaygroundController");

router.post("/compile", PlaygroundController.compileCode);

module.exports = router;
