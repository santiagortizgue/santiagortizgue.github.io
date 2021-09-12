import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';

import './PlaceholderCard.scss';

const PlaceholderCard = ({data, isVariant}) => {
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

    return (
        <div className={isVariant ? 'PlaceholderCard PlaceholderCard-negative' : 'PlaceholderCard'}>
            <img src="/png/placeholder.png" alt="placeholder cover" />
            <h4>{data.name}</h4>
            <p>{changeString(data.about)}</p>
        </div>
    );
}

export default PlaceholderCard;