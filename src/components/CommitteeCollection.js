import React, { useEffect } from 'react'
import WOW from 'wowjs';
const CommitteeCollection = ({ title, img, wowDelay }) => {
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
        <div className="yl-instructor-img-text text-center position-relative wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="yl-instructor-img position-relative">
                <img src={img} alt="Committee Icons" />
            </div>
            <div className="yl-instructor-text yl-headline position-relative">
                <h3><a href="#">{title}</a></h3>
            </div>
        </div>
    )
}

export default CommitteeCollection