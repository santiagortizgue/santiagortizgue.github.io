import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './ProfileLinks.scss'

const ProfileLinks = () => {
    const { state } = useContext(AppContext);
    const { footer_links } = state;

    return (
        <div className="ProfileLinks">
            <h5 className="ProfileLinks-title">Santiagortizgue</h5>
            <span className="ProfileLinks-line"></span>
            <div className="ProfileLinks-links">
                {footer_links.map((link) => (
                    <a href={link.url} key={link.id} target="_blank" rel="noreferrer" className="ProfileLinks-link">
                        <img src={`./svg/footer_links/${link.id}.svg`} alt={`Icon link ${link.name}`}/>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProfileLinks;