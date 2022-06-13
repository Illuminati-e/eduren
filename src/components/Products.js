import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import { getProduct } from './allData'
const Products = () => {
    return (
        <div className='flex flex-col mt-[100px] p-3 sm:p-[100px] yl-department-section'>
            <div className='yl-section-title yl-headline w-[500px] mb-10'>
                <span>
                    Our Products
                </span>
                <h2>There are the following products.</h2>
            </div>
            <div className='w-full flex justify-center'>
                <OwlCarousel id="yl-department-slider-id" className="yl-department-slide owl-theme" nav={true} margin={30} items={3} navText={["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]} responsiveClass={true} loop={true}
                    autoplay={true}
                    dots={false}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        400: {
                            items: 1,
                        },
                        600: {
                            items: 1,
                        },
                        700: {
                            items: 2,
                        },
                        1000: {
                            items: 3,

                        },
                        1300: {
                            items: 3,

                        },
                        1900: {
                            items: 3,

                        }
                    }}
                >
                    {getProduct()}
                </OwlCarousel>
            </div>
            <div className='yl-department-btn text-center'>
                <a href="">All Products <i className='fas fa-chevron-right'></i></a>
            </div>
        </div>
    )
}

export default Products