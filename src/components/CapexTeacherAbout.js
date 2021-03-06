import React from "react";
import AboutReusable from "./AboutReusable";
import AboutImg from '../assets/images/capexTeacherabout.jpg'
import { getIcon } from "./allData";

const CapexTeacherAbout = ({ img }) => {
	return (
		<div className='mt-[100px]'>
			<div className='mt-[50px]'>
				<div className='flex justify-center flex-wrap p-3'>
					{<AboutReusable img={img ? img : AboutImg} />}
					<div className='sm:ml-10 p-3 sm:w-[700px] mt-10 sm:mt-0'>
						<div className='relative mx-w-[599px]'>
							<p className='text-[100px] text-left text-[#53536c] font-black left-0  mb-0 opacity-[0.04] absolute right-0 -top-[80px]'>
								About Us
							</p>
							<h2 className='capitalize text-[40px] sm:text-[50px] text-black leading-tight font-serif font-semibold'>What you will get in capex teacher ?</h2>
						</div>
						{getIcon()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CapexTeacherAbout

