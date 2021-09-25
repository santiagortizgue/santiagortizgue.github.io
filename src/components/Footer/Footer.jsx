import React from 'react';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <ProfileLinks/>

            <p>Made using <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">React</a> & <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">Firebase</a>.</p>
        </div>
    );
}

export default Footer;