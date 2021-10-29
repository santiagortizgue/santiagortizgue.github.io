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
        
        projects_collection.forEach((doc) => {
            let p = builtProjectObject(doc.data(), doc.id);
            projects_temp.push(p);
        });

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
        });
    }

    const getProjectById = async (uid) => {
        const project_ref = doc(db, "projects", uid);

        const project_snap = await getDoc(project_ref);

        if (project_snap.exists()) {
            const project_object = await builtProjectObject(project_snap.data(), project_snap.id);
            setProject(project_object);
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

    const builtProjectObject = (data, uid) => {
        return new Project(data, uid);
    }

    return {
        getProjectById,
        getProjectByName,
        recent,
        project,
        setProject,
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

class Project{

    constructor(data, uid){
        this.about = data.about;
        this.apps = data.apps;
        this.cover = data.cover;
        this.e_img = data.e_img;
        this.e_url = data.e_url;
        this.header = data.header;
        this.imgLeft = data.imgLeft;
        this.imgRight = data.imgRight;
        this.links = data.links;
        this.name = data.name;
        this.order = data.order;
        this.quote = data.quote;
        this.recent_cover = data.recent_cover;
        this.slides = data.slides;
        this.team = data.team;
        this.title = data.title;
        this.topics = data.topics;
        this.work_roles = data.work_roles;
        this.year = data.year;
        this.uid = uid;
    }
}



