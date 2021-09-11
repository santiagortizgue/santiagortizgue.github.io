import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import './NotFound.scss'

const NotFound = () => {
    const title1 = '404';
    const title2 = 'Not Found';

    const history = useHistory();
    
    return (
        <div className="NotFound">
            <div className="NotFound-top">
                <img src="/svg/404.svg" alt="Not Found illustration" />
                <h3>{title1}<span>{title2}</span></h3>
                <Button onClick={()=> history.push('/')} text='Back to Home' />
            </div>
        </div>
    );
}

export default NotFound;