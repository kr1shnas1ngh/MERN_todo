const express = require("express");
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/todoController"); // Import functions from the controller

// Define routes
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
