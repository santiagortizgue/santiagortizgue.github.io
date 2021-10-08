import React from 'react';

import './PlaceholderCard.scss';

const PlaceholderCard = ({isVariant}) => {

    const placeholder = {
        name: 'Coming soon',
        about: 'I am building this section. It will be available soon!',
        id: 0,
    };

    return (
        <div className={isVariant ? 'PlaceholderCard PlaceholderCard-negative' : 'PlaceholderCard'}>
            <img src="/svg/placeholder.svg" alt="placeholder cover" />
            <h4>{placeholder.name}</h4>
            <p>{placeholder.about}</p>
        </div>
    );
}

export default PlaceholderCard;