const baseUrl = 'http://localhost:5184/todos';

export const fetchTodos = async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) throw new Error('Failed to fetch todos');
    return await response.json();
};

export const addTodo = async (todoItem) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todoItem)
    });
    if (!response.ok) throw new Error('Failed to add todo');
    console.log("r:",response);
    return await response.json();
};

export const deleteTodo = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {method: 'DELETE'});
    if (!response.ok) throw new Error('Failed to delete todo');
    return response.ok;
};

export const updateTodo = async (id, todoItem) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todoItem)
    });
    console.log(response);
    if (!response.ok) throw new Error('Failed to update todo');
    return await response.json();
};
