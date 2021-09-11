import React from 'react';
import './SwiperActions.scss';

export const ButtonLeft = ({ swiper }) => {
    const handleClick = (e) => {
        e.preventDefault();
        swiper.slidePrev(500, false);
    }
    return (
        <div className="ButtonLeft ButtonSwiper" onClick={(e) => handleClick(e)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.8333 10.5724L4.16663 10.5724" stroke="#4F3DFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99996 16.4058L4.16663 10.5724L9.99996 4.73909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export const ButtonRight = ({ swiper }) => {
    const handleClick = (e) => {
        e.preventDefault();
        swiper.slideNext(500, false);
    }
    return (
        <div className="ButtonRight ButtonSwiper" onClick={(e) => handleClick(e)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16658 10.7568L15.8333 10.7568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99992 4.92346L15.8333 10.7568L9.99992 16.5901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}