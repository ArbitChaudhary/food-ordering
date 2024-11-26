import React, { useState } from "react";
import { IMenulist } from "../../types";
import NavItem from "./nav_item";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

interface INavCollapse {
  menuItems: IMenulist;
}

const NavCollapse: React.FC<INavCollapse> = ({ menuItems }) => {
  const [open, setOpen] = useState<boolean>(false);
  const Icon = menuItems.icon;
  const menuIcon = Icon ? <Icon className="" /> : "";

  const menus = menuItems.children?.map((item) => {
    switch (item.type) {
      case "item":
        return <NavItem item={item} key={item.title} />;
      case "collapse":
        return <NavCollapse menuItems={item} key={item.title} />;
      default:
        return (
          <div className="text-red-500 text-lg font-medium">
            Menu Items Error
          </div>
        );
    }
  });
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        className="flex flex-row justify-between items-center gap-3"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          {menuIcon}
          {menuItems.title}
        </div>
        {open ? (
          <FaChevronUp className="text-sm" />
        ) : (
          <FaChevronDown className="text-sm" />
        )}
      </div>
      {open && <div className="pl-4">{menus}</div>}
    </div>
  );
};
export default NavCollapse;
