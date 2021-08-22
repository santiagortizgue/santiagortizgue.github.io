import React from 'react';
import './MadeTag.scss';

const MadeTag = ({ src, url }) => {
    return (
        <div className="MadeTag">
            <h4>Made working for</h4>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={src} alt="Entrerprise logo" />
            </a>
        </div>
    );
}

export default MadeTag;