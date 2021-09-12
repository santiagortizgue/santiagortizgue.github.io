import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';
import RoleTag from '../RoleTag/RoleTag';

import './ProjectCard.scss'

const ProjectCard = ({ data }) => {

    const { state } = useContext(AppContext);
    const { API } = state;
    const { MAX_CARD_CHARACTERS } = state;
    const { work_roles } = state;

    const changeString = (str) => {
        let s = "";
        //maxium caracters + ...
        let limit = MAX_CARD_CHARACTERS;
        s = str.substring(0, limit);
        s += "...";
        return s;
    }

    const findRole = (id) => {
        return work_roles.find(role => role.id === id);
    }

    return (
        <div className="ProjectCard">
            <img src={`${API}${data.cover.url}`} alt="project cover" />
            <h4>{data.name}</h4>
            <p>{changeString(data.about)}</p>
            <div className="ProjectCard-roles">
                {data.work_roles.map((role, index)=>(
                    <RoleTag key={index} data={findRole(role)}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;