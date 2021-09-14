import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { BackButton } from '../../components/Button/Button';
import RoleTag from '../../components/RoleTag/RoleTag';
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
                        {project.e_img ? <a className="Project-company" href={project.e_url}>Made working for: <img src={`${API}${project.e_img.url}`} alt="company" /></a> : ''}
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
                </div>
                : 'Loading...'}
        </>

    );
}

export default Project;