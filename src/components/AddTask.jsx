import React from 'react';
import { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

// Componente Para adicionar tarefa


const AddTask = ({handleTaskAddition}) => {
    // const input que recebe a tarefa, e adiciona usando o useState 
    const [inputData, setInput] = useState("")

    // Const usada para "Lidar com a mudança"
    //armazena o valor do input 
    // 
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInput(" ")
    }

    return ( 
        <div className='add-task-container'>
            <input 
                //handleInputChange é uma função mas não é passado com Parentesses 
                // para ser chamada apenas quando for execultada sua ação(onChange - quando digitar)
                //A ação onChange esta armazenando o valor digitado na const handleInputChange  
                onChange={handleInputChange} 
                value={inputData} 
                className='add-task-input' 
                type="text" 
            />

            <div className="button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;