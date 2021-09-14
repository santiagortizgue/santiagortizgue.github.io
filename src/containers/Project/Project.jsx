import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { BackButton, BehanceButton, GithubButton, LinkButton } from '../../components/Button/Button';
import RoleTag from '../../components/RoleTag/RoleTag';
import SwiperGallery from '../../components/SwiperGallery/SwiperGallery';
import AppContext from '../../context/AppContext';
import './Project.scss'

const Project = () => {
    const history = useHistory();
    const { id } = useParams();
    const { project, getProject, state } = useContext(AppContext);
    const { API } = state;
    const { work_roles } = state;

    useEffect(() => {
        getProject(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <img className="Project-header" src={`${API}${project.header.url}`} alt="header" />
                        {project.e_img ? <a className="Project-company" target="_blank" rel="noreferrer" href={project.e_url}>Made working for: <img src={`${API}${project.e_img.url}`} alt="company" /></a> : ''}
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
                        <img className="Project-imgLeft" src={`${API}${project.imgLeft.url}`} alt="left muck-up" />
                        <img className="Project-imgRight" src={`${API}${project.imgRight.url}`} alt="right muck-up" />
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
                                {project.topics.map((topic)=>(
                                    <article key={topic.id} className="Project-topic">
                                        <span>{`0${topic.id}`}</span>
                                        <h5>{topic.name}</h5>
                                        <p>{topic.text}</p>
                                    </article>
                                ))}
                            </div>
                            : ''}

                    </div>

                    <div className="Project-gallery">
                        <SwiperGallery gallery={project.slides} />
                    </div>

                </div>
                : 'Loading...'}
        </>

    );
}

export default Project;