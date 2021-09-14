import React, { useEffect } from 'react';
import AboutSlider from '../../components/AboutSlider/AboutSlider';
import ContextTag from '../../components/ContextTag/ContextTag';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import "./About.scss"

const About = () => {

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="About">
            <div className="About-top">
                <img className="About-img" src="./jpg/about.jpg" alt="About bio profile" />
                <h2 className="About-title">About me</h2>
                <p className="About-text">I’m Santiago Ortiz Guevara, a 23 years old Colombian <span>Designer</span>. I’ve worked with <strong>user interface</strong>, <strong>user experience</strong> and <strong>front-end development</strong> on multiple platforms. <br /><br /> My creativity allows me to build experiences and interfaces, based on human feelings and needs. I'm always learning new methodologies, software and strategies to develop these experiences.</p>
                <div className="About-location">
                    <img src="./svg/location.svg" alt="Location icon" />
                    <p>Cali, Colombia</p>
                </div>
            </div>
            <SocialMedia />
            <div className="About-sliders">
                <ContextTag text="Talents" />
                <AboutSlider />
                <ContextTag text="Experience & Skills" />
                <AboutSlider />
            </div>
        </div>
    );
}

export default About;