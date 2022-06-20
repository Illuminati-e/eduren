import React from "react";

const CapexAboutIcon = ({ title, description }) => {
	return (
		<div className="flex items-center  p-3">
			<div className="flex items-center text-2xl bg-[#ffa626] rounded-full text-white h-[50px] justify-center mr-4  w-[50px]">
				<i className="flaticon-graduation-cap "></i>
			</div>
			<div>
				<h1 className="font-semibold text-2xl">{title}</h1>
				<p className="capitalize">{description}</p>
			</div>
		</div>
	);
};

export default CapexAboutIcon;
