import React, { useRef, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { cssTransition, toast } from 'react-toastify';

import './Contact.scss';
import "animate.css";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});

const toastConfig = {
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    position: toast.POSITION.TOP_RIGHT,
    transition: bounce
}

const Contact = () => {
    const title1 = 'Hello!';
    const title2 = 'Let’s Talk.';

    const form = useRef(null);
    const { createMessage } = useContext(AppContext);

    let notifyPromise = null;


    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        //if form is not completed, stop this function and dont send action to api
        if (!isFormCompleted(formData)) return;

        //template of the new entry
        let new_message = {
            name: formData.get('name'),
            subject: formData.get('subject'),
            email: formData.get('email'),
            about: formData.get('about')
        }

        //display the toast
        notifyPromise = toast.loading("Please wait...", {transition: bounce});

        //post the entry, update the toast and clean form inputs
        createMessage(new_message).then((action) => {
            if (action.result === 'error') {
                handleOnError();
                return;
            }

            if (action.result === 'success') {
                handleOnSucces();
                return;
            }
        });
    }

    const isFormCompleted = (formData) => {
        if(formData.get('name').length === 0) return false;
        if(formData.get('subject').length === 0) return false;
        if(formData.get('email').length === 0) return false;
        if(formData.get('about').length === 0) return false;

        return true;
    }

    const handleOnSucces = () => {
        notifySucces();
        form.current.reset();
    }

    const handleOnError = () => {
        notifyError();
        form.current.reset();
    }

    const notifySucces = () => toast.update(notifyPromise, { render: "Good! I'll read it :D", type: 'success', isLoading: false, ...toastConfig });
    const notifyError = () => toast.update(notifyPromise, { render: "Ouch! Something went wrong", type: 'error', isLoading: false, ...toastConfig });

    return (
        <div className="Contact">
            <div className="Contact-top">
                <div className="Contact-container">
                    <h3>{title1}<span>{title2}</span></h3>

                    <p>Fill in the form or <a href="mailto:santiagortizgue@gmail.com" target="_blank" rel="noreferrer">Send me an Email</a></p>

                    <div className="Contact-items">
                        <div className="Contact-item">
                            <span><img src="/svg/mail.svg" alt="email icon" /></span>
                            <p>santiagortizgue@gmail.com</p>
                        </div>
                        <div className="Contact-item">
                            <span><img src="/svg/location.svg" alt="location icon" /></span>
                            <p>Cali, Colombia</p>
                        </div>
                    </div>

                    <h4 className="Contact-formTitle">Send me a Message</h4>

                    <form ref={form} className="Contact-form" onSubmit={handleSubmit}>
                        <input className="Contact-input" type="text" name="name" placeholder="Name..." />
                        <input className="Contact-input" type="text" name="subject" placeholder="Subject..." />
                        <input className="Contact-input" type="email" name="email" placeholder="Email..." />
                        <input className="Contact-input" type="textarea" name="about" placeholder="Tell me about your project..." />
                        <button className="Contact-button" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;