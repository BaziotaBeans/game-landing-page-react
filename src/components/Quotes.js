import React from 'react'
import Button from './Button';
import CardTestimonial from './CardTestimonial';
import { Testimonial_1, Testimonial_2, Testimonial_3 } from '../utils/Images';
import '../css/Quotes.scss';
import '../css/GlitchEffect2.scss';

const Quotes = () => {
    const button_info = {
        text: 'Read more testimonials',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="quotes-section" id="quotes">
            <div className="quotes-section__left">
                <h4 className="display-2">What people think?</h4>
                
                <h1 className="display-1 glitch-overlay" data-content="PRESS QUOTES">
                    <span>PRESS QUOTES</span>
                </h1>
                <div className="text">
                    <p>
                        Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.
                    </p>
                </div>
                <Button {...button_info}/>
            </div>
            <div className="quotes-section__right">
                <CardTestimonial testimonial={{
                    img_src: Testimonial_1,
                    img_name: 'evan img',
                    name: 'EVAN LAHTI',
                    code_name: 'PC Gamer',
                    content: 'One of my gaming highlights of the year.',
                    date: 'October 18, 2018'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_2,
                    img_name: 'jada img',
                    name: 'JADA GRIFFIN',
                    code_name: 'Nerdreactor',
                    content: 'The next big thing in the world of streaming and survival games.',
                    date: 'December 21, 2018'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_3,
                    img_name: 'aaron img',
                    name: 'Aaron Williams',
                    code_name: 'Uproxx',
                    content: 'Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.',
                    date: 'December 24, 2018'
                }}/>
                
            </div>
        </section>
    )
}

export default Quotes
