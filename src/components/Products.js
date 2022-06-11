import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import VRtech from '../assets/images/VR Tech @Home.jpg'
import AudioLearn from '../assets/images/Audio Visual Learning @Home.jpg'
import CapexEduc from '../assets/images/Capex EduCounsellor.jpg'
import CapexTeacher from '../assets/images/Canex Teacher @Home.jpg'
import ProductsCollection from './ProductsCollection'
const Products = () => {
    const productInfo = [{
        id: 1,
        title: "Capex Teacher",
        subtitle: "Home tutor",
        icon: "flaticon-pencil",
        img: CapexTeacher
    }, {
        id: 2,
        title: "VR Tech",
        subtitle: "Virtual Reality Device",
        icon: "flaticon-business-presentation",
        img: VRtech,
    }, {
        id: 3,
        title: "Capex EduCounsellor",
        subtitle: "To know and decide learning style and learning habits of the child",
        icon: "flaticon-graduation-cap",
        img: CapexEduc
    }, {
        id: 4,
        title: "Audio Visual Learning",
        subtitle: "To know and decide learning style and learning habits of the child",
        icon: "flaticon-pencil",
        img: AudioLearn
    }]

    const getProduct = () => {
        return (
            productInfo.map((product) => (
                <ProductsCollection key={product.id} icon={product.icon} img={product.img} subtitle={product.subtitle} title={product.title} />
            ))
        )
    }

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