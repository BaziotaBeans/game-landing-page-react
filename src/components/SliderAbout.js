import React, { useContext, useRef, useEffect, useState } from 'react'
import { MouseContext } from "../context/mouse-context";
import { SliderImage1, SliderImage2, SliderImage3, SliderImage4 } from '../utils/Images';
import '../css/SlideAbout.scss';


const SliderAbout = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const [ imageIndex, setImageIndex ] = useState(0);
    const Images = [
        SliderImage1,
        SliderImage2,
        SliderImage3,
        SliderImage4
    ];
    const controlContainerRef = useRef();
    const buttonSlider = useRef();
    const imageSliderRef = useRef();


    function handleChangeImage(){
        if (imageIndex + 1 < 4){
            setImageIndex(imageIndex + 1);
            imageSliderRef.current.src = Images[imageIndex];

            removeAllActiveDot();

            [...controlContainerRef.current.children][imageIndex + 1].classList.add('active-slider');
        }
        else{
            setImageIndex(0);
            imageSliderRef.current.src = Images[imageIndex];

            removeAllActiveDot();

            [...controlContainerRef.current.children][0].classList.add('active-slider');
        }
    }

    

    function removeAllActiveDot(){
        [...controlContainerRef.current.children].map(cur => {
            cur.classList.remove('active-slider');
        });
    }


    function handleChangeImgaeById(id){
        setImageIndex(id);
        imageSliderRef.current.src = Images[id];
    }

    function handleChangeButtonState(){
        handleChangeImage();
    }


    useEffect(() =>{
        buttonSlider.current.addEventListener('click', handleChangeButtonState);
        Array.from(controlContainerRef.current.children).forEach(cur => {
            cur.addEventListener('click', ()=> {
                const id = Number(cur.getAttribute('data-slider-index')) - 1;
                handleChangeImgaeById(id);
                removeAllActiveDot();
                cur.classList.add('active-slider');
            })
        })

        return () =>{
            buttonSlider.current.removeEventListener('click', handleChangeButtonState);
            Array.from(controlContainerRef.current.children).forEach(cur => {
                cur.removeEventListener('click', ()=> {
                    const id = Number(cur.getAttribute('data-slider-index')) - 1;
                    removeAllActiveDot();
                    cur.classList.add('active-slider');
                })
            })
        }
    });

    return (
        <div className="container-slide">
        
            <div className="image-slider">
                
                <div className="view-slider view-slider-1">
                    <img src={SliderImage1} alt=""/>
                </div>
                <div className="view-slider view-slider-2">
                    <img src={SliderImage2} alt=""/>
                </div>
                <div className="view-slider view-slider-3">
                    <img src={SliderImage3} alt=""/>
                </div>
                <div className="view-slider view-slider-4" >
                    <img src={SliderImage4} alt="" ref={imageSliderRef}/>
                </div>

                <div className="control-container" ref={controlContainerRef}>
                    <span className="slider-1 active-slider" data-slider-index="1"></span>
                    <span className="slider-2" data-slider-index="2"></span>
                    <span className="slider-3" data-slider-index="3"></span>
                    <span className="slider-4" data-slider-index="4"></span>
                </div>
            </div>
            <span 
                ref={buttonSlider}
                className="slider-next-btn"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                
                onMouseLeave={() => cursorChangeHandler("")}>
                <i className='bx bx-right-arrow'></i>
            </span>
        </div>
    )
}

export default SliderAbout
