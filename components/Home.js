import React, { useState } from "react";
import Form from './Form';
import Todo from './Todo';
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask, completeTask } from '../actions';


const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home(props) {
  console.log('Home')
  const dispatch=useDispatch()
  const tasks = useSelector( state => state.tasks)
  console.log('Home:forEach')
  tasks.forEach( (task, index)=>{
    console.log(index + ": " + JSON.stringify(task))
  })
  //const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  function addTheTask(name) {
    const newTask = { 'id': "todo-" + nanoid(), 'name': name, 'completed': false };
    console.log('newTask='+newTask)
    console.log('newTask='+JSON.stringify(newTask))
    dispatch(addTask(newTask))
    //setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const task = tasks.find((task) => id === task.id);
    dispatch(completeTask(task))
    /*const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });*/
    //setTasks(updatedTasks);
  }
  function deleteTheTask(id) {
    //const remainingTasks = tasks.filter((task) => id !== task.id);
    const task = tasks.find((task) => id === task.id);
    dispatch(deleteTask(task))
    //setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const task = tasks.find((task) => id === task.id);
    task.name = newName;
    dispatch(updateTask(task))
    /*const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });*/
    //setTasks(editedTaskList);
  }
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTheTask}
        editTask={editTask}
      />
    ));
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
     
      <div className="todoapp stack-large">
        <Form addTask={addTheTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
      
  );
}

export default Home;