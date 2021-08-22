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

    const handleType = () => {
        let value = "mobile";
        if (window.innerWidth > 500) {
            value = "web";
        }
        setMenu(value);
    }

    const handleState = () => {
        if(menu === "web"){
            setState(false);
            return;
        }
        setState(!state);
    }

    return (
        <>
            {menu === "mobile" ?
                <div className="WebMenu">
                    {state ?
                        <div className="WebMenu-mobileMenu">
                            <ProfileLinks />
                            <NavMenu handleState={handleState} />
                        </div>
                        : ''}
                    <div className="WebMenu-mobileContent">
                        <Link to="/" className="WebMenu-mobileLogo" onClick={()=> {setState(false)}}>
                            <img src="./svg/logo.svg" alt="Logo icon" />
                        </Link>
                        <h1 className="WebMenu-mobileTitle">Santiagortizgue</h1>
                        <div className="WebMenu-iconContainer" onClick={handleState}>
                        </div>
                    </div>
                </div>
                :
                <div className="WebMenu">
                    <div className="WebMenu-context">
                        <Link to="/" className="WebMenu-Logo" onClick={()=> {setState(false)}}>
                            <img src="./svg/logo.svg" alt="Logo icon" />
                        </Link>
                        <h1 className="WebMenu-title">Santiagortizgue</h1>
                    </div>
                    <NavMenu handleState={handleState} />
                </div>
            }
        </>
    );
}

export default WebMenu;