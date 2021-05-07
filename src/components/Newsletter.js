import React, {useState} from 'react'
import { Newsletter } from '../utils/Images';
import Button from './Button';
import '../css/Newsltetter.scss';
import '../css/GlitchEffect2.scss';

const NewsletterSection = () => {
    const [inputValue, setInputValue] = useState('fabiobaziota@gmail.com');
    
    function handleChange(e){
        setInputValue(e.target.value)
    }

    const button_info = {
        text: 'Subscribe now',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="newsletter-section">
            
            <div className="newsletter-section__left">
                <img src={Newsletter} alt=""/>
            </div>
            <div className="newsletter-section__right">
                <h4 className="display-2">WANT TO STAY</h4>
                <h1 className="display-1 glitch-overlay" data-content="NEWSLETTER SUBSCRIBE">
                    <span>NEWSLETTER SUBSCRIBE</span>
                </h1>

                <p>
                    In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
                </p>

                <div className="input-group">
                    <div className="input-email">
                        <input type="email" onChange={handleChange} value={inputValue} id="email" placeholder="Your email address"/>
                        <label htmlFor="email">Your email address</label>
                    </div>
                    <Button {...button_info}/>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
