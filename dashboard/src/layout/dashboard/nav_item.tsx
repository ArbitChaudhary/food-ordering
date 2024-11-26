import React, { useState } from "react";
import { Link } from "react-router-dom";

interface INavItem {
  item: any;
}
const NavItem: React.FC<INavItem> = ({ item }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const Icon = item.icon;
  const itemIcon = Icon ? <Icon className="text-lg" /> : "";

  const handleClick = () => {
    setSelected(true);
  };
  return (
    <Link to={item.url}>
      <div
        className={` ${
          selected ? "bg-white text-black rounded-full" : "text-white"
        } flex flex-row items-center justify-start gap-2 h-10 px-5 hover:bg-white hover:text-black hover:rounded-full mt-2 font-medium text-sm`}
        onClick={handleClick}
      >
        <div>{itemIcon}</div>
        <div>{item.title}</div>
      </div>
    </Link>
  );
};
export default NavItem;
