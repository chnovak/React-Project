const tasksReducer = (state = [], action) => {
    let newTasks;
    let task;
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.task];
      case "DELETE_TASK":
        const remainingTasks = state.filter((task) => action.task.id !== task.id);
        return [...remainingTasks];
      case "UPDATE_TASK":
        newTasks = [...state];
        task =  newTasks.find((task) => action.task.id === task.id);
        task.name = action.task.name;
        return [...newTasks];
      case "COMPLETE_TASK":
        newTasks = [...state];
        task = newTasks.find((task) => action.task.id === task.id);
        task.completed = !action.task.completed;
        return [...newTasks];
      default:
        return state;
    }
  };
  export default tasksReducer;