import React, { useEffect } from 'react'
import WOW from 'wowjs';
import AboutImg from '../assets/images/about.jpg'
import AboutReusable from './AboutReusable';
const About = ({ img, flag = true }) => {
    useEffect(() => {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }, [])
    return (
        <div className='mt-[100px] flex items-center flex-wrap justify-center'>
            <div className='flex flex-wrap p-2 justify-evenly items-center'>
                {<AboutReusable img={img ? img : AboutImg} flag={flag} />}
                <div className="yl-about-text-area-content wow fadeInRight  ml-10 sm:w-[700px]" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="yl-section-title yl-headline">
                        <span>About Us</span>
                        <h2 className='capitalize'>we are eduren academic private limited company, formed by renewed educationalists.
                        </h2>
                    </div>
                    <div className="yl-about-text pera-content">
                        <p>Our research on educational model, learning habits and learning styles of different countries and different students of various geographical regions in international studies motivate us to create this model for academic service.</p>
                        <p>Our association with different colleges, Edtech Companies help us to serve out Customer/Parents</p>
                        <p>The primary service of the company is to provide <b>
                            Home Tuition
                        </b> in standard <b>1 to 10</b> in India as <b className='capitalize'>capex teacher</b>, under campaign, <b>"Teacher & Technology at Home"</b> </p>
                        <div className="yl-about-qoute">
                            <span>"We wish to strengthen basic education in our country with proper training and technology"</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About