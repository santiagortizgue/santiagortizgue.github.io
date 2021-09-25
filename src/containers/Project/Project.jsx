import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { BackButton, BehanceButton, GithubButton, LinkButton } from '../../components/Button/Button';
import RoleTag from '../../components/RoleTag/RoleTag';
import MadeTag from '../../components/MadeTag/MadeTag';
import SwiperGallery from '../../components/SwiperGallery/SwiperGallery';
import AppContext from '../../context/AppContext';

import './Project.scss';

const Project = () => {
    const history = useHistory();
    const { id } = useParams();
    const { project, getProjectById, state, getImageUrl } = useContext(AppContext);
    const { work_roles } = state;

    const [imgLeft, setImgLeft] = useState(null);
    const [imgRight, setImgRight] = useState(null);
    const [imgHeader, setImgHeader] = useState(null);
    const [imgLogo, setImgLogo] = useState(null);
    const [imgSlider, setImgSlider] = useState(null);

    useEffect(() => {
        getProjectById(id);
        window.scrollTo(0, 0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchImgHeader = async () => {
            let url = await getImageUrl(project.header);
            setImgHeader(url);
        }

        const fetchImgLeft = async () => {
            let url = await getImageUrl(project.imgLeft);
            setImgLeft(url);
        }

        const fetchImgRight = async () => {
            let url = await getImageUrl(project.imgRight);
            setImgRight(url);
        }

        const fetchImgLogo = async () => {
            let url = await getImageUrl(project.e_img);
            setImgLogo(url);
        }

        const fetchImgSlider = async () => {
            let slides_temp = [];
            project.slides.forEach(async (slide) => {
                let slide_temp = {
                    id: slide.id,
                    url: await getImageUrl(slide.url)
                }
                slides_temp.push(slide_temp);
            });

            setImgSlider(slides_temp);
        }

        if (project && project.e_img) {
            fetchImgLogo();
        }

        if (project && project.slides) {
            fetchImgSlider();
        }

        if (project) {
            fetchImgHeader();
            fetchImgLeft();
            fetchImgRight();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project]);

    const handleBack = (e) => {
        e.preventDefault();
        history.push("/portfolio");
    }

    const findRole = (id) => {
        return work_roles.find(role => role.id === id);
    }

    return (
        <>
            {project ?
                <div className="Project">
                    <div className="Project-top">
                        <BackButton onClick={handleBack} text="Back to Portfolio" />
                        <h2 className="Project-title">{project.title}</h2>
                        <div className="Project-data"><span>{project.year}</span><div className="Project-dot"></div><h1>{project.name}</h1></div>
                        {imgHeader ? <img className="Project-header" src={imgHeader} alt="header" /> : <img className="Project-header" src="/gif/placeholder/header.gif" alt="header" />}
                        {imgLogo ? <MadeTag src={imgLogo} url={project.e_url} /> : ''}
                        <p className="Project-about">{project.about}</p>
                        <div className="Project-roles">
                            <p>Roles in this project</p>
                            <div>
                                {project.work_roles.map((role, index) => (
                                    <RoleTag key={index} data={findRole(role)} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="Project-info">
                        {imgLeft ? <img className="Project-imgLeft" src={imgLeft} alt="left muck-up" /> : <img className="Project-imgLeft" src="/gif/placeholder/imgLeft.gif" alt="left muck-up" />}
                        {imgRight ? <img className="Project-imgRight" src={imgRight} alt="right muck-up" /> : <img className="Project-imgRight" src="/gif/placeholder/imgRight.gif" alt="right muck-up" /> }
                        <div className="Project-quote"><p>{project.quote}</p></div>
                    </div>

                    <div className="Project-details">
                        <div className="Project-board">

                            {project.apps ?
                                <div className="Projects-built">
                                    <h3 className="Project-detailTitle">Built with</h3>
                                    <div className="Project-builtContainer">
                                        {project.apps.map((app, index) => (
                                            <span key={index} className="Project-app">
                                                <img src={`/apps/${app}.png`} alt="app logo" />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                : ''}

                            {project.team ?
                                <div className="Project-teammates">
                                    <h3 className="Project-detailTitle">Teammates</h3>
                                    <div className="Project-teamContainer">
                                        {project.team.map((person) => (
                                            <a href={person.route} key={person.id} target="_blank" rel="noreferrer">{person.name}</a>
                                        ))}
                                    </div>
                                </div>
                                : ''}

                            {project.links ?
                                <div className="Project-options">
                                    <h3 className="Project-detailTitle">Want to know more?</h3>
                                    <div className="Project-optionsContainer">
                                        {project.links.map((btn) => {
                                            if (btn.type === 'link') return <LinkButton key={btn.id} url={btn.url} />;
                                            if (btn.type === 'behance') return <BehanceButton key={btn.id} url={btn.url} />;
                                            if (btn.type === 'github') return <GithubButton key={btn.id} url={btn.url} />;
                                            return '';
                                        })}
                                    </div>
                                </div>
                                : ''}

                        </div>

                        {project.topics ?
                            <div className="Project-topics">
                                {project.topics.map((topic) => (
                                    <article key={topic.id} className="Project-topic">
                                        <span>{`0${topic.id + 1}`}</span>
                                        <h5>{topic.name}</h5>
                                        <p>{topic.text}</p>
                                    </article>
                                ))}
                            </div>
                            : ''}

                    </div>

                    <div className="Project-gallery">
                        {imgSlider ? <SwiperGallery gallery={imgSlider} /> : <img src="/gif/placeholder/slides.gif" alt="muck-up" />}
                    </div>

                </div>
                : 'Loading...'}
        </>

    );
}

export default Project;