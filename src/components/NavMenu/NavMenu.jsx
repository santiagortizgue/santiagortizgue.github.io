import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './NavMenu.scss'

const NavMenu = ({handleState}) => {
    const { state } = useContext(AppContext);
    const { pages } = state;

    const handleClick = () => {
        handleState();
    }

    return (
        <div className="NavMenu">
            {pages.map((page) => (
                <Link key={page.id} to={page.route} onClick={handleClick} className="NavMenu-item">
                    <h3>
                        {page.name}
                    </h3>
                    {page.type === "soon" ? 
                    <span className="NavMenu-soon">
                        Soon
                    </span> 
                    : ''}
                </Link>
            ))}
        </div>
    );
}

export default NavMenu;