import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import './NotFound.scss'

const NotFound = () => {
    const title1 = '404';
    const title2 = 'Not Found';

    const history = useHistory();

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="NotFound">
            <div className="NotFound-top">
                <div className="NotFound-container">
                    <img src="/svg/404.svg" alt="Not Found illustration" />
                    <h3>{title1}<span>{title2}</span></h3>
                    <Button onClick={() => history.push('/')} text='Back to Home' />
                </div>
            </div>
        </div>
    );
}

export default NotFound;