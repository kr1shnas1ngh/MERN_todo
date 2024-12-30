// controllers/todoController.js

let todos = [];

const getTodos = async (req, res) => {
    res.send(todos);
};

const createTodo = async (req, res) => {
    const { title } = req.body; // Destructure `title` from the request body
    const newTodo = { id: todos.length + 1, title, isCompleted: false };
    todos.push(newTodo);
    res.status(200).json(newTodo);
};

const updateTodo = (req, res) => {
    const { id } = req.params; // Extract id from URL parameters
    const { newTitle, newIsCompleted } = req.body; // Extract new data from request body

    const todo = todos.find((t) => t.id == id); // Locate the todo by id

    if (!todo) {
        return res.status(404).send({ error: "Todo not found" }); // Return error if todo doesn't exist
    }

    // Update the todo with new values if provided, or keep the old values
    todo.title = newTitle || todo.title;
    todo.isCompleted = newIsCompleted !== undefined ? newIsCompleted : todo.isCompleted;

    res.json(todo); // Send the updated todo as a response
};

const deleteTodo = (req, res) => {
    const { id } = req.params; // Extract id from URL parameters
    todos = todos.filter((t) => t.id != id); // Remove the todo with the matching id
    res.status(204).send(); // Send a "No Content" response
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
