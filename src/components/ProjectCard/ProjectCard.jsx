import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import RoleTag from '../RoleTag/RoleTag';

import './ProjectCard.scss'

const ProjectCard = ({ data }) => {

    const { state, getImageUrl } = useContext(AppContext);
    const { MAX_CARD_CHARACTERS } = state;
    const { work_roles } = state;

    const [imgCover, setImgCover] = useState(null);

    useEffect(() => {

        const fetchImgCover = async () => {
            let url = await getImageUrl(data.cover);
            setImgCover(url);
        }

        fetchImgCover();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <Link to={`/project/${data.uid}`} className="ProjectCard">
            {imgCover ? <img src={imgCover} alt="project cover" /> : ''}
            <h4>{data.name}</h4>
            <p>{changeString(data.about)}</p>
            <div className="ProjectCard-roles">
                {data.work_roles.length > 0 && data.work_roles.map((role, index) => (
                    <RoleTag key={index} data={findRole(role)} />
                ))}
            </div>
        </Link>
    );
}

export default ProjectCard;