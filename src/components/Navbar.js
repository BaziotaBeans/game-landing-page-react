import React, { useState, useContext } from 'react';
import { MouseContext } from "../context/mouse-context";
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import '../css/Header.scss';
import { Logo56x56, XboxIcon, Steam } from '../utils/Images';
import '../css/Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLang, setToggleLang] = useState(false);
    const [toggleMenuScroll, setToggleMenuScroll] = useState(false);
    const [toggleSkewMenu, settoggleSkewMenu] = useState(false);
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
        settoggleSkewMenu(!toggleSkewMenu);
    };

    const handleToggleLangContainer = () =>{
        setToggleLang(!toggleLang);
    };
    

    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 600) {
            setToggleMenuScroll(true);
        }else{
            setToggleMenuScroll(false);
        }
    });

    return (
        <div className="nav-container m-auto">
            <nav className="navbar">
                <ScrollLink to="main" className="logo">
                    <img src={Logo56x56} alt="Logo" className="logo"/>
                </ScrollLink>
                <div className={`menu-toggle ${toggleMenu ? 'is-active':''} 
                ${toggleMenuScroll ? 'scrolled':''} ${toggleSkewMenu ? 'active':''}`} 
                id="mobile-menu" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${toggleMenu ? 'active showMenu':''}`}>
                    <li >
                        <ScrollLink  
                            to="main" 
                            className="nav-links active-link"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >Main</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="gamefeature" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Game Feature</ScrollLink >
                    </li>
                    <li>
                        <ScrollLink 
                            to="systemrequirements" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        System Requirements</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="quotes" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            Quotes</ScrollLink>
                    </li>

                    <div className="container-sponsor-inside-nav-menu">
                        <Link to="#">
                            <img src={XboxIcon} alt=""/>
                        </Link>
                        <Link to="#">
                            <img src={Steam} alt=""/>
                        </Link>

                    </div>
                </ul>

                <div className="lang-container">
                    <div className="current-lang">
                        <span className="current-lang__name">ENG</span> 
                        <span className="current-lang__toggle" onClick={handleToggleLangContainer}>
                            <i className="uil uil-angle-down"></i>
                        </span>
                    </div>
                    <div className={`lang-option ${toggleLang ? 'active' : ''}`}>
                        <span className="lang-russ">RUS</span>
                        <span className="lang-fra">FRA</span>
                        <span className="lang-deu">DEU</span>
                    </div>
                </div>

                <div className="container-sponsor">
                    <Link to="#">
                        <img src={XboxIcon} alt=""/>
                    </Link>
                    <Link to="#">
                        <img src={Steam} alt=""/>
                    </Link>

                </div>
                


            </nav>
        </div>
    );   
}

export default Navbar;