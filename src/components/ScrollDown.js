import React, { useContext } from 'react'
import { MouseContext } from "../context/mouse-context";
import Scroll from 'react-scroll';
import '../css/ScrollDown.scss';

const ScrollDown = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    return (
        <div className="scrollDown"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}>
            <ScrollLink to="about">
                <span className="story">The Story</span>
                <span className="btn-arrow-down"><i className='bx bx-down-arrow'></i></span>
            </ScrollLink>
        </div>
    )
}

export default ScrollDown
