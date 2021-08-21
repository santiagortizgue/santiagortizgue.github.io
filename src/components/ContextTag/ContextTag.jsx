import React from 'react';
import './ContextTag.scss';

const ContextTag = ({text}) => {
    return (
        <span className="ContextTag">
            <h5>{text}</h5>
            <div className="ContextTag-line"></div>
        </span>
    );
}

export default ContextTag;