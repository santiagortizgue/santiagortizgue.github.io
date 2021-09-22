import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';

import './PlaceholderCard.scss';

const PlaceholderCard = ({isVariant}) => {
    const { state } = useContext(AppContext);
    const { MAX_CARD_CHARACTERS } = state;

    const changeString = (str) => {
        let s = "";
        //maxium caracters + ...
        let limit = MAX_CARD_CHARACTERS;
        s = str.substring(0, limit);
        s += "...";
        return s;
    }

    const placeholder = {
        name: 'Coming soon',
        about: 'I am building this section. It will be available soon!',
        id: 0,
    };

    return (
        <div className={isVariant ? 'PlaceholderCard PlaceholderCard-negative' : 'PlaceholderCard'}>
            <img src="/png/placeholder.png" alt="placeholder cover" />
            <h4>{placeholder.name}</h4>
            <p>{changeString(placeholder.about)}</p>
        </div>
    );
}

export default PlaceholderCard;