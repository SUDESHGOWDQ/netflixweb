import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Navbar.scss'



import logo from '../Images/logo-full.png';
import smallLogo from '../Images/avatar.png';

const Navbar = () => {

    const [ floating, setFloating ] = useState(false);

    useEffect(()=>{
        function handleScroll() {
            if( window.scrollY > 100 ) {
                setFloating(true);
            } else {
                setFloating(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        }

    },[])



    return (
        <div
            className={classNames(
                "header",
                { 'header--float': floating }
            )}
            >
            <img
                className="header__logo"
                src={logo}
                alt="Netflix logo"
            />
            <img
                className="header__avatar"
                src={smallLogo}
                alt="Netflix avatar"
            />
        </div>
    );
}

export default Navbar;