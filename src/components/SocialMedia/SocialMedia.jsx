import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './SocialMedia.scss';

const SocialMedia = () => {
    const { state } = useContext(AppContext);
    const { social_media } = state;

    return (
        <div className="SocialMedia">
            {social_media.big.map((link) => (
                <a href={link.url} key={link.id} target="_blank" rel="noreferrer" className="SocialMedia-bigLink">
                    <img src={`./svg/social_media/big/${link.id}.svg`} alt={`Icon ${link.name}`} />
                    <div className="SocialMedia-linkData">
                        <h3>{link.name}</h3>
                        <p>{link.profile}</p>
                    </div>
                </a>
            ))}
            <div className="SocialMedia-smallLinks">
                {social_media.small.map((link) => (
                    <a href={link.url} key={link.id} target="_blank" rel="noreferrer" className="SocialMedia-smallLink">
                        <img src={`./svg/social_media/small/${link.id}.svg`} alt={`Icon ${link.name}`} />
                        <p>{link.profile}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SocialMedia;