import React from 'react'
import SliderAbout from './SliderAbout';
import '../css/About.scss';
import '../css/GlitchEffect2.scss';


const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-section__left">
                <h4 className="display-2">WHAT IS SOS?</h4>
                <h1 className="display-1 glitch-overlay" data-content="SOCIAL BATTLE">
                    <span>SOCIAL BATTLE</span>
                </h1>
                <h1 className="display-1 glitch-overlay" data-content="ROYALE GAME">
                    <span>ROYALE GAME</span>
                </h1>
                <hr className="line-separator"/>
                <div className="text-container">
                    <p className="about-text-info">
                        Each round, <span className="negrite">you</span> and <span className="negrite">15</span> other contestants compete to
                        escape a deadly island filled with monsters. The trick is: <span className="negrite">three</span> people can survive. Will you run
                        solo or form friendships with others to escape?
                        <br/><br/> 
                        Making the right decisions could be the
                        difference between <span className="underline">life and death.</span>
                    </p>
                </div>
            </div>
            <div className="about-section__right">
                <SliderAbout/>
            </div>
        </section>
    )
}

export default About
