import React from 'react'

const SliderCollection = ({ img, title, subtitle, description }) => {
    return (
        <div className="slider-main-item relative">
            <div className="slider-main-img img-zooming bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="slider-overlay"></div>
            <div className="sm:ml-20 ml-auto  mr-auto pl-[15px] pr-[15px] w-full">
                <div className="slider-main-text yl-headline pera-content">
                    <span style={{ fontSize: "25px" }}>{title}</span>
                    <h1 style={{ fontSize: "40px" }}>{subtitle}
                    </h1>
                    <p>{description}</p>
                    <div className="slider-main-btn">
                        <a href="#"><i className="fas fa-user"></i> About us</a>
                        <a href="#"><i className="fas fa-cog"></i> Courses</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCollection