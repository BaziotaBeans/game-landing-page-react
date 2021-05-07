
import React, { useContext } from 'react'
import { MouseContext } from "../context/mouse-context";
import '../css/Button.scss';

const Button = (props) => {
    const { text, type, price_text } = props;
    const { cursorChangeHandler } = useContext(MouseContext);
    if (type === 'price-button'){
        return (
            <button className="btn price-button"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <span>{text}</span>
                <span>{price_text}</span>
            </button> 
        )
    } else{
        return (
            <button className="btn normal-button"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <span>{text}</span>
            </button>
        )
    }
}

export default Button;
