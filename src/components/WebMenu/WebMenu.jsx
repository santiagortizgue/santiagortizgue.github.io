import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

import './WebMenu.scss';
import "animate.css";

const WebMenu = () => {
    const [menu, setMenu] = useState("mobile");
    const [state, setState] = useState(false);

    const menuRef = useRef();;

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
            setState(false);
            value = "web";
        }
        setMenu(value);
    }

    const handleState = () => {
        if (menu === "web") {
            setState(false);
            return;
        }
        if (state && menuRef.current) {
            menuRef.current.classList.remove('animate__fadeInUp');
            menuRef.current.classList.add('animate__fadeOutDown');
            setTimeout(() => {
                setState(false);
                return;
            }, 500);
        };

        if(!state){
            setState(true);
        }
        //setState(!state);
    }

    const handleClickLink = () =>{
        handleState(false);
    }

    return (
        <>
            {menu === "mobile" ?
                <div className="WebMenu WebMenu-shadow">
                    {state ?
                        <div ref={menuRef} className="WebMenu-mobileMenu animate__animated animate__fadeInUp">
                            <ProfileLinks />
                            <NavMenu callback={handleClickLink} handleState={handleState} />
                        </div>
                        : ''}
                    <div className="WebMenu-mobileContent">
                        <Link to="/" className="WebMenu-mobileLogo" onClick={() => { setState(false) }}>
                            <svg viewBox="0 0 566 566" >
                                <polygon points="212.3,0.2 283,70.9 141.6,212.3 283,353.7 212.3,424.4 0.2,212.3 " />
                                <rect x="233" y="233" width="100" height="100" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.2222 282.9999)" />
                                <polygon points="283.1,212.4 353.8,141.7 566,353.8 353.8,566 283.1,495.2 424.5,353.8 353.8,283.1 " />
                            </svg>
                        </Link>
                        <h1 className="WebMenu-mobileTitle">Santiagortizgue</h1>
                        <div className="WebMenu-iconContainer" onClick={handleState}>
                            {state ?
                                <img src="./svg/close.svg" alt="icon close" />
                                :
                                <img src="./svg/menu.svg" alt="icon menu" />
                            }
                        </div>
                    </div>
                </div>
                :
                <div className="WebMenu">
                    <div className="WebMenu-context">
                        <Link to="/" className="WebMenu-Logo" onClick={() => { setState(false) }}>
                            <svg viewBox="0 0 566 566" >
                                <polygon points="212.3,0.2 283,70.9 141.6,212.3 283,353.7 212.3,424.4 0.2,212.3 " />
                                <rect x="233" y="233" width="100" height="100" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.2222 282.9999)" />
                                <polygon points="283.1,212.4 353.8,141.7 566,353.8 353.8,566 283.1,495.2 424.5,353.8 353.8,283.1 " />
                            </svg>
                        </Link>
                        <h1 className="WebMenu-title">Santiagortizgue</h1>
                    </div>
                    <NavMenu callback={handleClickLink} handleState={handleState} />
                </div>
            }
        </>
    );
}

export default WebMenu;