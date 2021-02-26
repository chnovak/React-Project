export const addTask = (task) => {
    return { 'type' : 'ADD_TASK', 'task' : task}
}
export const deleteTask = (task) => {
    return { 'type' : 'DELETE_TASK', 'task' : task}
}
export const updateTask = (task) => {
    return { 'type' : 'UPDATE_TASK', 'task' : task}
}
export const completeTask = (task) => {
    return { 'type' : 'COMPLETE_TASK', 'task' : task}
}