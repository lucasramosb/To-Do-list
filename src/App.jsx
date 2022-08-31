import './App.css'
import React, { useState } from "react";
import Tasks from './components/Tasks';
// import Task from './components/Task';
import AddTask from './components/AddTask';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    },
  ]); 

  //completar tarefa - passada para o tasks
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed};
      return task;
    })
    setTasks(newTasks)
  } 

  const handleTaskAddition = (tasktitle) => {
    const newTasks =  [
      ...tasks, 
      {
        title: tasktitle, 
        id: uuid(),
        completed: false, 
      }]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => t)
  }

  return ( 
    <>
    <div className='container'>
      <AddTask handleTaskAddition={handleTaskAddition}  />
      {/* A const tasks foi passada para o componente tasks com o nome de tasks */}
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      
    </div>

    </>
  )

};

export default App;

