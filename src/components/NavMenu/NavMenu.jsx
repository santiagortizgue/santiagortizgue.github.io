import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './NavMenu.scss'

const NavMenu = ({ callback }) => {
    const { state } = useContext(AppContext);
    const { pages } = state;

    const location = useLocation();

    const handleLink = (route) => {
        return location.pathname !== route;
    }

    return (
        <div className="NavMenu">
            {pages.map((page) => {
                if (handleLink(page.route)) {
                    return (
                        <Link
                            to={page.route}
                            key={page.id}
                            onClick={()=>callback()}
                            className="NavMenu-item">
                            <h3>
                                {page.name}
                            </h3>
                            {page.type === "soon" ?
                                <span className="NavMenu-soon">
                                    Soon
                                </span>
                                : ''}
                        </Link>)
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