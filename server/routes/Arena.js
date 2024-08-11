const express = require("express");
const router = express.Router();
const ArenaController = require("../controllers/ArenaController");

router.post("/questions", ArenaController.createQuestion);

router.get("/questions", ArenaController.getAllQuestions);

router.get("/questions/:id", ArenaController.getQuestionById);

router.put("/questions/:id", ArenaController.updateQuestion);

router.delete("/questions/:id", ArenaController.deleteQuestion);

router.post("/questions/run", ArenaController.runQuestion);

router.post("/questions/submit", ArenaController.submitQuestion);

module.exports = router;
