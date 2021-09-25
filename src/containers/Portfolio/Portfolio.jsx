import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import './Portfolio.scss';

import SocialMedia from '../../components/SocialMedia/SocialMedia';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer';
import PlaceholderCard from '../../components/PlaceholderCard/PlaceholderCard';
import PlaceholderBlock from '../../components/PlaceholderBlock/PlaceholderBlock';

const Portfolio = () => {
    const { projects } = useContext(AppContext);

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Portfolio">

            <div className="Portfolio-projects Portfolio-container">
                <h2 className="Portfolio-title">Projects & Experiencies</h2>

                {projects.length !== 0 ? <SwiperContainer data={projects} isProject={true} isVariant={false} /> : <PlaceholderBlock/>}
               
            </div>

            <div className="Portfolio-challenges Portfolio-container">
                <h2 className="Portfolio-title Portfolio-title2">Development Challenges</h2>

                <PlaceholderCard isVariant={true} />
            </div>

            <div className="Portfolio-concepts Portfolio-container">
                <h2 className="Portfolio-title">UI Design Concepts</h2>

                <PlaceholderCard isVariant={false} />
            </div>

            <SocialMedia />
        </div>
    );
}

export default Portfolio;