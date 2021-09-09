import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Portfolio.scss';

import SocialMedia from '../../components/SocialMedia/SocialMedia';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer';

const Portfolio = () => {
    const { projects } = useContext(AppContext);

    return (
        <div className="Portfolio">
            <div className="Portfolio-projects Portfolio-container">
                <h2 className="Portfolio-title">Projects & Experiencies</h2>
                <SwiperContainer data={projects}/>
            </div>
            <div className="Portfolio-challenges Portfolio-container">
                <h2 className="Portfolio-title Portfolio-title2">Development Challenges</h2>

            </div>
            <div className="Portfolio-concepts Portfolio-container">
                <h2 className="Portfolio-title">UI Design Concepts</h2>

            </div>
            <SocialMedia />
        </div>
    );
}

export default Portfolio;