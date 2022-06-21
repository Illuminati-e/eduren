import React from 'react'
import { Link } from 'react-router-dom'
const SliderCollection = ({ img, title, subtitle, description }) => {
    return (
        <div className="slider-main-item relative item">
            <div className="slider-main-img img-zooming bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="slider-overlay"></div>
            <div className="sm:ml-20 ml-auto  mr-auto pl-[15px] pr-[15px] w-full">
                <div className="slider-main-text yl-headline pera-content">
                    <span style={{ fontSize: "25px" }}>{title}</span>
                    <h1 style={{ fontSize: "40px" }}>{subtitle}
                    </h1>
                    <p>{description}</p>
                    <div className="slider-main-btn">
                        <Link to="/about"><i className="fas fa-user"></i> About us</Link>
                        <Link to="/capexteacher"><i className="fas fa-atom"></i> Products</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCollection