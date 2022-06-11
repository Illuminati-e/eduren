import React from 'react'

const ProductsCollection = ({ title, subtitle, img, icon }) => {
    return (
        <div className="yl-department-innerbox relative">
            <div className="yl-department-img">
                <img src={img} alt="Products Icon" />
            </div>
            <div className="yl-department-text-icon flex flex-wrap items-center ml-12">
                <div className="yl-department-icon flex">
                    <i className={`${icon}`}></i>
                </div>
                <div className="yl-department-text yl-headline">
                    <h3><a href="#">{title}</a></h3>
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="yl-department-hover-text text-center p-2">
                <div className="yl-department-icon">
                    <i className={`${icon}`}></i>
                </div>
                <div className="yl-department-text yl-headline">
                    <h3><a href="#">{title}</a></h3>
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="yl-department-more-btn">
                <a href="#"><i className="flaticon-arrow"></i></a>
            </div>
        </div>
    )
}

export default ProductsCollection