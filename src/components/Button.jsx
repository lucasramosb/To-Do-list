import React from 'react';
import "./button.css"

const Button = ({children, onClick}) => {
    return ( 
        // é passado como props a função que a gente quer execultar
        <button onClick={onClick} className='task-button'>
            {children}
        </button> 
    );
}
 
export default Button;