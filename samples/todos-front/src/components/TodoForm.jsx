import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            text: todo,
            completed: false
        });
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
