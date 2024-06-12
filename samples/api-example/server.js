const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update an existing todo
app.put('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    let index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos[index] = updatedTodo;
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        res.json(deletedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

