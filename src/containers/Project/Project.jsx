import React, { useEffect, useContext } from 'react';
import { useHistory, useParams, usePrams } from 'react-router';
import { BackButton } from '../../components/Button/Button';
import AppContext from '../../context/AppContext';
import './Project.scss'

const Project = () => {
    const history = useHistory();
    const { id } = useParams();
    const { project, getProject } = useContext(AppContext);

    useEffect(()  => {
        getProject(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBack = (e) => {
        e.preventDefault();
        history.push("/portfolio");
    }

    return (
        <>
            {project ?
                <div className="Project">
                    <div className="Project-top">
                        <BackButton onClick={handleBack} text="Back to Portfolio" />
                        <h2>{project.name}</h2>
                    </div>
                </div>
                : ''}
        </>

    );
}

export default Project;