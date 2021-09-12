import React from 'react';
import './Button.scss'

const Button = ({ onClick, text }) => (
    <button onClick={onClick} className="Button">
        {text}
    </button>
);

export default Button;

export const BackButton = ({ onClick, text }) => (
    <button onClick={onClick} className="BackButton">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.8334 10H4.16675" stroke="#0B0A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.0001 15.8333L4.16675 9.99999L10.0001 4.16666" stroke="#0B0A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {text}
    </button>
);