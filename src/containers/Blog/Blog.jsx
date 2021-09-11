import React from 'react';
import './Blog.scss'

const Blog = () => {
    const title1 = '<Blog/>';
    const title2 = 'Coding...';
    
    return (
        <div className="Blog">
            <div className="Blog-top">
                <img src="/svg/vector.svg" alt="Coding illustration" />
                <h3>{title1}<span>{title2}</span></h3>
            </div>
        </div>
    );
}

export default Blog;