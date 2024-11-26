import React from "react";
import logo from "./../../assets/Food_logo.png";

interface ILogo extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Logo: React.FC<ILogo> = (props) => {
  return (
    <div>
      <img src={logo} alt="" {...props} />
    </div>
  );
};

export default Logo;
