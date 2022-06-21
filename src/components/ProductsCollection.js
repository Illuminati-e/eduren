import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCollection = ({ title, subtitle, img, icon, link }) => {
    return (
        <div className="yl-department-innerbox relative item">
            <div className="yl-department-img">
                <img src={img} alt="Products Icon" />
            </div>
            <div className="yl-department-text-icon flex flex-wrap items-center ml-12">
                <div className="yl-department-icon flex">
                    <i className={`${icon}`}></i>
                </div>
                <div className="yl-department-text yl-headline">
                    <h3><Link to={`${link}`}>{title}</Link></h3>
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="yl-department-hover-text text-center p-2">
                <div className="yl-department-icon">
                    <i className={`${icon}`}></i>
                </div>
                <div className="yl-department-text yl-headline">
                    <h3><Link to={`${link}`}>{title}</Link></h3>
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="yl-department-more-btn">
                <Link to={`${link}`}><i className="flaticon-arrow"></i></Link>
            </div>
        </div>
    )
}

export default ProductsCollection