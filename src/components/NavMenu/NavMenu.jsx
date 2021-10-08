import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './NavMenu.scss'

const NavMenu = ({ handleState }) => {
    const { state } = useContext(AppContext);
    const { pages } = state;

    const location = useLocation();
    const history = useHistory();

    const handleClick = (route) => {
        handleState();
        history.push(route);
    }

    const handleLink = (route) => {
        return location.pathname !== route;
    }

    return (
        <div className="NavMenu">
            {pages.map((page) => {
                if (handleLink(page.route)) {
                    return (
                        <div
                            key={page.id}
                            onClick={(e) => { handleClick(page.route) }}
                            className="NavMenu-item">
                            <h3>
                                {page.name}
                            </h3>
                            {page.type === "soon" ?
                                <span className="NavMenu-soon">
                                    Soon
                                </span>
                                : ''}
                        </div>)
                } else {
                    return (
                        <div
                            key={page.id}
                            className="NavMenu-item">
                            <h3>
                                {page.name}
                            </h3>
                            {page.type === "soon" ?
                                <span className="NavMenu-soon">
                                    Soon
                                </span>
                                : ''}
                        </div>)
                }
            })}

        </div>
    );
}

export default NavMenu;