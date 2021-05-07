import React, { useContext } from 'react'
import { MouseContext } from "../context/mouse-context";
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import { Logo56x56 } from '../utils/Images';
import '../css/Footer.scss';


const Footer = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    return (
        <footer>
            <div className="content-1">
                <ScrollLink to="main">
                    <img src={Logo56x56} alt="logo"/>
                </ScrollLink>

                <div className="site-map">
                    <ul className="site-map__list">
                        <li>
                            <ScrollLink to="main"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                >
                                Main
                            </ScrollLink>
                        </li>
                        <li><ScrollLink to="about"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                >
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="gamefeature"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                >
                                Game Feautures
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="systemrequirements"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                                spy={true} 
                                smooth={true} 
                                duration={500}>System Requirements
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="quotes"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                Quotes
                            </ScrollLink>
                        </li>
                    </ul>
                </div>

                <span className="social-container">
                    <Link to="#" className="facebook-link"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <i className='bx bxl-facebook' ></i></Link>
                    <Link to="#" className="twitter-link"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <i className='bx bxl-twitter' ></i></Link>
                    <Link to="#" className="youtube-link"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <i className='bx bxl-youtube' ></i></Link>
                    <Link to="#" className="twitch-link"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <i className='bx bxl-twitch'></i></Link>
                </span>
            </div>
            <hr/>
            <div className="content-2">
                <span className="copiright">© 2021 Outpost Games, Inc. All Rights Reserved</span>
                <div className="author">
                    <span>
                        Made with 
                        <span className="love"><i className="uil uil-heart"></i></span>by
                        <Link className="author-name" 
                            to="https://github.com/BaziotaBeans"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}>
                            Beans
                        </Link>
                    </span>
                </div>
                <div className="site-info">
                    <Link to="#">Privacy Policy</Link><Link to="#">| Terms of Services |</Link><Link to="#">Code of Conduct</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
