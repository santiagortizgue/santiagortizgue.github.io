import { useEffect, useState } from 'react';
import initialState from '../initialState';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDocs, collection, where, query, doc, getDoc, orderBy } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

import { firebaseConfig } from '../config/firebaseConfig';

const useInitialState = () => {
    const [state] = useState(initialState);
    const [projects, setProjects] = useState([]);
    const [recent, setRecent] = useState(null);
    const [project, setProject] = useState(null);
    //const [user, setUser] = useState(null);

    //firebase variables
    initializeApp(firebaseConfig)
    //const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();

    useEffect(() => {
        getUser();
        getProjects();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProjects = async () => {
        const collection_ref = collection(db, "projects");

        const q = query(collection_ref, orderBy("order"));

        const projects_collection = await getDocs(q);

        let projects_temp = [];
        projects_collection.forEach((doc) => {
            projects_temp.push(builtProjectObject(doc.data(), doc.id));
        });

        console.log("Project: ", projects_temp);

        setProjects(projects_temp);
    }

    const getUser = async () => {
        signInWithEmailAndPassword(auth, process.env.REACT_APP_EMAIL, process.env.REACT_APP_PASSWORD)
            .then((userCredential) => {
                // Signed in
                //setUser(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('Error trying to login', errorCode, errorMessage);
            });
    }

    const getProjectByName = async (name) => {
        const project_ref = collection(db, "projects");

        const q = await query(project_ref, where("name", "==", name));

        const projects_collection = await getDocs(q);

        projects_collection.forEach((doc) => {
            const recent = builtProjectObject(doc.data(), doc.id);
            setRecent(recent);
            console.log("Recent project: ", recent);
        });
    }

    const getProjectById = async (uid) => {
        const project_ref = doc(db, "projects", uid);

        const project_snap = await getDoc(project_ref);

        if(project_snap.exists()) {
            const project_object = builtProjectObject(project_snap.data(), project_snap.id);
            setProject(project_object);
            console.log("Selected project: ", project_object);
        }else{
            console.log("The project doesn't exist");
        }
    }

    const createMessage = async (data) => {
        await timeout(1500);

    }

    const getImageUrl = async (route) => {
        const storage_ref = ref(storage, route);

        let url = await getDownloadURL(storage_ref);
        console.log(url);

        return url;
    }

    const builtProjectObject = (data, uid) => {
        let p = {
            ...data,
            uid,
        };

        return p;
    }

    return {
        getProjectById,
        getProjectByName,
        recent,
        project,
        projects,
        state,
        createMessage,
        getImageUrl
    };
};

export default useInitialState;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}



