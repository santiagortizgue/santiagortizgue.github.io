import { useEffect, useState } from 'react';
import initialState from '../initialState';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDocs, collection, where, query, doc, getDoc, orderBy, addDoc } from "firebase/firestore"
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

        const q = query(collection_ref, orderBy("order", "desc"));

        const projects_collection = await getDocs(q);

        let projects_temp = [];
        projects_collection.forEach(async (doc) => {
            projects_temp.push(await builtProjectObject(doc.data(), doc.id));
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

        projects_collection.forEach(async (doc) => {
            const recent = await builtProjectObject(doc.data(), doc.id);
            setRecent(recent);
            console.log("Recent project: ", recent);
        });
    }

    const getProjectById = async (uid) => {
        const project_ref = doc(db, "projects", uid);

        const project_snap = await getDoc(project_ref);

        if (project_snap.exists()) {
            const project_object = await builtProjectObject(project_snap.data(), project_snap.id);
            setProject(project_object);
            console.log("Selected project: ", project_object);
        } else {
            console.log("The project doesn't exist");
        }
    }

    const createMessage = async (data) => {
        await timeout(1000);
        try {
            let collection_ref = collection(db, "messages");
            await addDoc(collection_ref, data);

            return { result: 'success' };
        } catch (error) {
            return { result: 'error' };
        }
    }

    const getImageUrl = async (route) => {
        const storage_ref = ref(storage, route);

        let url = await getDownloadURL(storage_ref);

        return url;
    }

    const builtProjectObject = async (data, uid) => {
        const topics_ref = collection(db, `projects/${uid}/topics`);
        const topics_collection = await getDocs(topics_ref);

        let topics_temp = [];
        topics_collection.forEach((doc) => {
            topics_temp.push(doc.data());
        });

        const team_ref = collection(db, `projects/${uid}/team`);
        const team_collection = await getDocs(team_ref);

        let team_temp = [];
        team_collection.forEach((doc) => {
            team_temp.push(doc.data());
        });

        const slides_ref = collection(db, `projects/${uid}/slides`);
        const slides_collection = await getDocs(slides_ref);

        let slides_temp = [];
        slides_collection.forEach((doc) => {
            slides_temp.push(doc.data());
        });

        const links_ref = collection(db, `projects/${uid}/links`);
        const links_collection = await getDocs(links_ref);

        let links_temp = [];
        links_collection.forEach((doc) => {
            links_temp.push(doc.data());
        });

        let p = {
            ...data,
            uid,
            topics: topics_temp.length !== 0 ? topics_temp : null,
            team: team_temp.length !== 0 ? team_temp : null,
            slides: slides_temp.length !== 0 ? slides_temp : null,
            link: links_temp.length !== 0 ? links_temp : null,
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



