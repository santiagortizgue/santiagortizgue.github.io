import React, { useEffect } from 'react';

import './Blog.scss'
import "animate.css";

const Blog = () => {
    const title1 = '<Blog/>';
    const title2 = 'Coding...';

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Blog animate__animated animate__fadeIn">
            <div className="Blog-top">
                <div className="Blog-container">
                    <img src="/svg/vector.svg" alt="Coding illustration" />
                    <h3>{title1}<span>{title2}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Blog;