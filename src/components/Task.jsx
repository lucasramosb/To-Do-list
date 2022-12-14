import React from "react";
import './Task.css'

const Task = ({task, handleTaskClick}) => {
    return (
        <div className="task-container" 
            style={task.completed ? { borderLeft: "6px solid rgb(0, 208, 255)", background:"#00000000", color:"black"} : {} }
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}> 
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button">x</button>
            </div>
        </div>
    )
}
    
    // <div className="task-container"> {task.title}</div>
export default Task;