import React from 'react'
import '../css/Features.scss';
import '../css/GlitchEffect2.scss';

const Features = () => {
    return (
        <section className="features-section" id="gamefeature">
            <div className="features-section__content-margin-right"></div>
            <div className="features-section__content">
                <h4 className="display-2">WHAT'S SO SPECIAL?</h4>
                <h1 className="display-1 glitch-overlay" data-content="FEATURES">
                    <span>FEATURES</span>
                </h1>

                <div className="features-accordion">
                    <div className="item-1">
                        <div className="features-accordion-title">
                            <button className="option option-1 activeted"></button>
                            <h2>SURVIVE AT ALL COSTS</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            You have 30 minutes to find a relic, signal for extraction, and grab
                            one of three spots on the rescue chopper.
                            </p>
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="features-accordion-title">
                            <span className="option option-2"></span>
                            <h2>CREATE ALLIES AND ENEMIES</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            You have 30 minutes to find a relic, signal for extraction, and grab
                            one of three spots on the rescue chopper.
                            </p>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="features-accordion-title">
                            <span className="option option-3"></span>
                            <h2>IMPRESS THE AUDIENCE</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            You have 30 minutes to find a relic, signal for extraction, and grab
                            one of three spots on the rescue chopper.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
