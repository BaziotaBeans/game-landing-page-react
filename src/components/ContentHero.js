import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import '../css/ContentHero.scss';
import '../css/GlitchEffect2.scss';


const ContentHero = () => {
    const button_info = {
        text: 'Buy now on Stream',
        price_text: '$14.99', 
        type: 'price-button' 
    }

    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div 
            data-aos="fade-up"
        > 
            <div className="hero-content">
                <h1 className="hero-content__title-1 glitch-overlay" data-content="SURVIVE AT ALL COSTS">
                    <span>
                    SURVIVE AT ALL COSTS
                    </span>
                </h1>
                {/* <h1 className="hero-content__title-1">
                    SURVIVE AT ALL COSTS
                </h1> */}
                <h4 className="hero-content__title-2">Experience new social battle royale game</h4>
                <Button {...button_info}/>
            </div>
        </div>
    )
}

export default ContentHero;
