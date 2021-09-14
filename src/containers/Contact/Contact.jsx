import React, { useRef, useEffect } from 'react';
import './Contact.scss';

const Contact = () => {
    const title1 = 'Hello!';
    const title2 = 'Let’s Talk.';

    const formData = useRef(null);

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

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
                    <h4>Send me a Message</h4>
                    <form ref={formData} className="Contact-form" onSubmit={handleSubmit}>
                        <input className="Contact-input" type="text" name="name" placeholder="Name..." />
                        <input className="Contact-input" type="text" name="subject" placeholder="Subject..." />
                        <input className="Contact-input" type="email" name="email" placeholder="Email..." />
                        <input className="Contact-input" type="textarea" name="data" placeholder="Tell me about your project..." />
                        <button className="Contact-button" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;