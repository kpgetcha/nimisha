export const addTask = (id, name) => ({
    type: 'ADD_TASK',
    id: id,
    name: name
});

export const deleteTask= (id) =>({
    type: 'DELTE_TASK',
    id: id
});
