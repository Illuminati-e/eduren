import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item mb-2">
      <div className="flex flex-row justify-between cursor-pointer m-auto text-white p-[15px]" style={{ backgroundColor: "rgb(0 64 90)" }} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="text-2xl font-black">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content text-black p-[25px]" style={{ backgroundColor: "aliceblue" }}>{content}</div>}
    </div>
  );
};

export default Accordion;
