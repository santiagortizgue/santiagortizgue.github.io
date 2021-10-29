import React, { useEffect, useContext } from 'react';
import SwiperCard from '../../components/SwiperCard/SwiperCard';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import AppContext from '../../context/AppContext';

import "./About.scss";
import "animate.css";


const About = () => {
    const { state } = useContext(AppContext);
    const { talents, experiences } = state;

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="About animate__animated animate__fadeIn">
            <section className="About-top">
                <img className="About-img animate__animated animate__fadeIn" src="./jpg/about.jpg" alt="About bio profile" />
                <h2 className="About-title">About me</h2>
                <p className="About-text">I’m Santiago Ortiz Guevara, a 23 years old Colombian <span>Designer</span>. I’ve worked with <strong>front-end development</strong> and <strong>user interface design</strong> on multiple platforms. <br /><br /> My creativity allows me to build experiences and interfaces, based on human feelings and needs. I'm always learning new methodologies, software and strategies to develop these experiences.</p>
                <div className="About-location">
                    <img src="./svg/location.svg" alt="Location icon" />
                    <p>Cali, Colombia</p>
                </div>
            </section>
            <SocialMedia />
            <section className="About-sliders">
                <SwiperCard text="Talents" gallery={talents} />
                <SwiperCard text="Experience & Skills" gallery={experiences} />
            </section>
        </div>
    );
}

export default About;