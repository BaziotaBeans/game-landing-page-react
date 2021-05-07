import React, {useContext} from 'react';
import '../css/Cursor.scss';
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouse-context";

const Cursor = () => {
    const { cursorType } = useContext(MouseContext);
    const { x,y } = useMousePosition();
    return (
        <>
            <div style={{ top: `${y - 10}px`, left: `${x - 10}px` }}
                className={`cursor ${cursorType}`}>
            </div>

            <div
                className={`dot ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div>

            {/* <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`ring ${cursorType}`}
            ></div>
            <div
                className={`dot ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div> */}
        </>
    );
};

export default Cursor;

