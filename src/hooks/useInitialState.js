//import axios from 'axios';
import { useEffect, useState } from 'react';
import initialState from '../initialState';

//const API = 'http://localhost:1337/products';

const useInitialState = () => {
    const [state] = useState(initialState);
    const [projects, setProjects] = useState([]);

    /*
    useEffect(async () =>{
          const response = await axios(API);
          setProducts(response.data);
    }, []);
    */

    useEffect(() => {
        setProjects(state.projects);
    }, []);

    return {
        projects,
        state,
    };
};

export default useInitialState;