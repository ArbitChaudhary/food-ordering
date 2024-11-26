import { IMenulist } from "../../types";
import NavCollapse from "./nav_collapse";
import NavItem from "./nav_item";

interface INavGroup {
  item: IMenulist;
}

const NavGroup = ({ item }: INavGroup) => {
  const items = item?.children?.map((menu: any) => {
    switch (menu.type) {
      case "item":
        return <NavItem key={menu.title} item={menu} />;
      case "collapse":
        return <NavCollapse key={menu.title} menuItems={menu} />;
      default:
        return (
          <div className="" key={menu.title}>
            Menu Items Error
          </div>
        );
    }
  });
  return (
    <div>
      <div className="text-black">{items}</div>
    </div>
  );
};

export default NavGroup;
