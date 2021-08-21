import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import './WebMenu.scss'

const WebMenu = () => {
    const [menu, setMenu] = useState("mobile");
    const [state, setState] = useState(false);

    useEffect(() => {
        handleType();
        window.addEventListener("resize", handleType);

        return () => {
            window.removeEventListener('resize', handleType);
        }
    }, []);

    function handleType() {
        let value = "mobile";
        if (window.innerWidth > 500) {
            value = "web";
        }
        setMenu(value);
    }

    return (
        <>
            {menu === "mobile" ?
                <div className="WebMenu">
                    {state ?
                        <div className="WebMenu-mobileMenu">
                            <ProfileLinks />
                            <NavMenu />
                        </div>
                        : ''}
                    <div className="WebMenu-mobileContent">
                        <Link to="/" className="WebMenu-mobileLogo">
                            <img src="./svg/logo.svg" alt="Logo icon" />
                        </Link>
                        <h1 className="WebMenu-mobileTitle">Santiagortizgue</h1>
                        <div className="WebMenu-iconContainer" onClick={() => { setState(!state) }}>
                        </div>
                    </div>
                </div>
                :
                <div className="WebMenu">
                    <div className="WebMenu-context">
                        <Link to="/" className="WebMenu-Logo">
                            <img src="./svg/logo.svg" alt="Logo icon" />
                        </Link>
                        <h1 className="WebMenu-title">Santiagortizgue</h1>
                    </div>
                    <NavMenu />
                </div>
            }
        </>
    );
}

export default WebMenu;