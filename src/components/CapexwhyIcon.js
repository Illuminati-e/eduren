import React from "react";

const CapexwhyIcon = ({ description }) => {
	return (
		<div className="flex items-center p-2 mt-3">
			<div className="flex items-center text-2xl bg-[#ffa626] rounded-full text-white h-[50px] justify-center mr-4 w-[50px]">
				<i className="flaticon-graduation-cap"></i>
			</div>
			<div className="flex-shrink-[4]">
				<p className="capitalize ">{description}</p>
			</div>
		</div>
	);
};

export default CapexwhyIcon;
