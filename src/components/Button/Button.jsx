import React from 'react';
import './Button.scss'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className="Button">
            {text}
        </button>
    );
}

export default Button;