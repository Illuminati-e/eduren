import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Aboutus = () => {
	return (
		<>
			<Navbar />
			<About />
			<div className="mt-[30px] container mx-auto">
				<div className="flex items-center flex-wrap justify-center">
					<div className="flex flex-wrap p-2 justify-evenly items-center">
						<div className="w-full yl-about-text pera-content">
							<p>
								Our Research on Educational model , Teaching models, Learning
								Habits and Learning styles of different countries and different
								students of various geographical regions in international
								studies motivate us to create this model for academic service.
							</p>
							<p>
								Our association with different colleges, EdTech companies help
								us to serve our customers/ Parents.
							</p>
							<p>
								The primary service of the company is to provide Home Tuition in
								standard 1 to 10 in pan India as CAPAX TEACHER @ HOME ,under
								campaign, ‘ Teacher & Technology at Home
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Aboutus;
