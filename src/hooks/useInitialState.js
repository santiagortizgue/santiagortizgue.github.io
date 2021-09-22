import axios from 'axios';
import {
    useEffect,
    useState
} from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state] = useState(initialState);
    const [projects, setProjects] = useState([]);
    const [recent, setRecent] = useState(null);
    const [project, setProject] = useState(null);
    const {
        API
    } = state;
    const [token, setToken] = useState(null);

    useEffect(() => {
        getUser();
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

    const getUser = async () => {
        try {
            const response = await axios.post(`${API}/auth/local`, {
                identifier: process.env.REACT_APP_EMAIL,
                password: process.env.REACT_APP_PASSWORD,
            });
            setToken(response.data.jwt);

        } catch (error) {
            console.log("Error trying to log in", error.message);
        }
    }

    const getRecent = async (id) => {
        try {
            const response = await axios(`${API}/projects/${id}`);
            setRecent(response.data);
        } catch (error) {
            console.log("Error getting the recent project", error.message);
        }
    }

    const getProject = async (id) => {
        try {
            const response = await axios(`${API}/projects/${id}`);
            setProject(response.data);
        } catch (error) {
            console.log("Error getting the project", error.message);
        }
    }

    const createMessage = async (data) => {
        await timeout(1500);

        try {
            const response = await axios.post(`${API}/messages`,
            data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return {result: 'success', response};

        } catch (error) {
            console.log("Error trying to create a message", error.message);
            return {result: 'error'};
        }
    }

    return {
        getProject,
        getRecent,
        recent,
        project,
        projects,
        state,
        createMessage
    };
};

export default useInitialState;


function compareId(a, b) {
    return b.id - a.id;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}