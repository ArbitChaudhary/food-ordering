import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

interface IRouterButton {
  name: string;
  href: string;
  icon?: React.ReactNode;
}
const RouterButton: React.FC<IRouterButton> = ({ name, href, icon }) => {
  return (
    <>
      <Link to={href}>
        <Button className="px:2 py-1 md:py-2 flex flex-row gap-1 items-center justify-center max-w-[150px]">
          {name}
          {icon}
        </Button>
      </Link>
    </>
  );
};
export default RouterButton;
