import React, {useEffect, useState} from "react";
import './App.css'; // Ensure your custom styles are applied
import {fetchTodos, addTodo, deleteTodo, updateTodo} from './services/todoService';

function App() {
    const [userInput, setUserInput] = useState("");
    const [todos, setTodos] = useState([]);
    const colors = ["red", "green", "blue"]; // Example colors

    useEffect(() => {
        const loadTodos = async () => {
            try {

                const fetchedTodos = await fetchTodos();
                setTodos(fetchedTodos.map(todo => ({
                    ...todo,
                    priorityColor: todo.priorityColor || colors[0] // Assign default color if not set
                })));
            } catch (error) {
                console.error("Error fetching todos:", error.message);
            }
        };
        loadTodos();
    }, []);

    const handleAddItem = async () => {
        if (userInput.trim() !== "") {
            try {
                const newItem = {value: userInput, priorityColor: colors[0]};
                const addedItem = await addTodo(newItem);
                setTodos([...todos, addedItem]);
                setUserInput(""); // Clear input after adding
            } catch (error) {
                console.error("Error adding todo:", error.message);
            }
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error.message);
        }
    };

    const handleEditItem = async (id, currentValue) => {
        const editedValue = prompt('Edit the todo:', currentValue);

        if (editedValue !== null && editedValue.trim() !== '') {
            try {
                // Find the current todo to retrieve its priority color
                const currentTodo = todos.find(todo => todo.id === id);
                if (currentTodo) {
                    await updateTodo(id, {value: editedValue, priorityColor: currentTodo.priorityColor});
                    // Update the state to reflect the change
                    setTodos(prevTodos => prevTodos.map(todo => {
                        if (todo.id === id) {
                            return {...todo, value: editedValue};
                        }
                        return todo;
                    }));
                }
            } catch (error) {
                console.error("Error updating todo:", error.message);
            }
        }
    };


    const handleColorChange = async (id) => {
        try {
            setTodos((prevTodos) => prevTodos.map(todo => {
                if (todo.id === id) {
                    const currentIndex = colors.indexOf(todo.priorityColor);
                    const nextColor = colors[(currentIndex + 1) % colors.length];
                    updateTodo(id, {value: todo.value, priorityColor: nextColor}); // Update asynchronously without waiting
                    return {...todo, priorityColor: nextColor};
                }
                return todo;
            }));
        } catch (error) {
            console.error("Error updating todo:", error.message);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const dayMonthOptions = {day: '2-digit', month: '2-digit'};
        const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
        return (
            <>
                <div className="date">{date.toLocaleDateString(undefined, dayMonthOptions)}</div>
                <div className="time">{date.toLocaleTimeString(undefined, timeOptions)}</div>
            </>
        );
    };

    return (
        <div className="app-container">
            <h1 className="title">TODO-LIST</h1>
            <div className="input-section">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Add item . . ."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button className="add-btn" onClick={handleAddItem}>ADD</button>
            </div>
            <ul className="list-container">
                {todos.map((item) => (
                    <li key={item.id} className="list-item">
                        <span className="priority-color" style={{backgroundColor: item.priorityColor}}
                              onClick={() => handleColorChange(item.id)}></span>
                        <span className="task-text">{item.value}</span>
                        {item.createdAt && <div className="date-time">{formatDate(item.createdAt)}</div>}
                        <div className="todo-meta">
                            <button className="delete-btn" onClick={() => handleDeleteItem(item.id)}>Delete</button>
                            <button className="edit-btn" onClick={() => handleEditItem(item.id, item.value)}>Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;