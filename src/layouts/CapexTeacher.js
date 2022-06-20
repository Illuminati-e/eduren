import React from "react";
import CapexTeacherAbout from "../components/CapexTeacherAbout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutReusable from "../components/AboutReusable";
import { getwhyiconInfo } from "../components/allData";
import SubNavbar from "../components/SubNavbar";
import CapexTeacherBannerOne from '../assets/images/capexTeacherBannerOne.jpg'
import CapexTeacherBannerTwo from '../assets/images/capexTeacherBannerTwo.jpg'
const CapexTeacher = () => {
	return (
		<>
			<Navbar />
			<SubNavbar />
			<div className="mt-[100px]">
				<div className="mt-[50px]">
					<div className="flex justify-center flex-wrap">
						<div className="ml-10 sm:w-[700px] mt-10 sm:mt-0">
							<div className="relative mx-w-[599px]">
								<p className="text-[100px] text-left text-[#53536c] font-black left-0  mb-0 opacity-[0.04] absolute right-0 -top-[80px]">
									About Us
								</p>
								<h2 className="capitalize text-[40px] leading-tight font-semibold">
									What you will get in capex teacher ?
								</h2>
								{getwhyiconInfo()}
							</div>
						</div>
						{<AboutReusable img={CapexTeacherBannerOne} />}
					</div>
				</div>
			</div>
			<CapexTeacherAbout img={CapexTeacherBannerTwo} />
			<Footer />
		</>
	);
};

export default CapexTeacher;
