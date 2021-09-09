import axios from 'axios';
import { useEffect, useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state] = useState(initialState);
    const [projects, setProjects] = useState([]);
    const [recent, setRecent] = useState(null);
    const { API } = state;

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getData = async () => {
        try {
            const response = await axios(`${API}/projects`);
            let items = response.data.sort(compareId);
            setProjects(items);
        } catch (error) {
            console.log("Error getting the projects", error.message);
        }
    }

    const getProject = async (id) => {
        try {
            const response = await axios(`${API}/projects/${id}`);
            setRecent(response.data);
        } catch (error) {
            console.log("Error getting the recent project", error.message);
        }
    }

    return {
        getProject,
        recent,
        projects,
        state,
    };
};

export default useInitialState;


function compareId(a, b) {
    return b.id - a.id;
}