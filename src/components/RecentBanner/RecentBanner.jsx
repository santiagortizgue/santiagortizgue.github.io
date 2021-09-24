import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Button from '../Button/Button';
import MadeTag from '../MadeTag/MadeTag';

const RecentBanner = ({ data }) => {
    const { getImageUrl } = useContext(AppContext);
    const history = useHistory();

    const [recent, setRecent] = useState(data);
    const [imgCover, setImgCover] = useState(null);
    const [imgLogo, setImgLogo] = useState(null);

    useEffect(() => {
        setRecent(data);

        const fetchImgCover = async () => {
            let url = await getImageUrl(recent.recent_cover);
            setImgCover(url);
        }

        const fetchImgLogo = async () => {
            let url = await getImageUrl(recent.e_img);
            setImgLogo(url);
        }

        if (recent.recent_cover) {
            fetchImgCover();
        }

        if (recent.e_img) {
            fetchImgLogo();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recent]);

    const handleProject = () => { 
        history.push(`/project/${recent.id}`);
    }

    return (
        <div className="Home-recent">
            {imgCover ? <img className="Home-recentImage" src={imgCover} alt="Project recent cover" /> : ''}
            <h2 className="Home-recentTitle">{recent.name}</h2>
            <p className="Home-recentAbout">{recent.about}</p>
            {imgLogo ? <MadeTag src={imgLogo} url={recent.e_url} /> : ''}
            <Button onClick={handleProject} text="See more" />
        </div>
    );
}

export default RecentBanner;