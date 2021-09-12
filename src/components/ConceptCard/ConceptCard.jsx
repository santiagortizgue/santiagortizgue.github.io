import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';

import './ConceptCard.scss';

const ConceptCard = ({ data }) => {
    const { state } = useContext(AppContext);
    const { API } = state;
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
        <div className="ConceptCard">
            <img src={`${API}${data.cover.url}`} alt="concept cover" />
             <h4>{data.name}</h4>
            <p>{changeString(data.about)}</p>
        </div>
    );
}

export default ConceptCard;