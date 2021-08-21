import axios from 'axios';
import { useEffect, useState } from 'react';
import initialState from '../initialState';

const API = 'http://localhost:1337/projects';

const useInitialState = () => {
    const [state] = useState(initialState);
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(API);
                setProjects(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error getting the projects", error.message);
            }
        }
        getData();
    }, []);

    return {
        projects,
        state,
    };
};

export default useInitialState;