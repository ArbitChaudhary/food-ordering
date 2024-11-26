import React from "react";

interface IHeading {
  title: string;
  icon?: React.ReactNode;
}

const Heading: React.FC<IHeading> = ({ title, icon }) => {
  return (
    <div className="font-bold text-lg relative mb-5 text-blue-700 before:absolute before:content-[''] before:bg-blue-700 before:w-16 before:h-[3px] before:left-0 before:bottom-0">
      {title}
      {icon}
      <hr />
    </div>
  );
};

export default Heading;
