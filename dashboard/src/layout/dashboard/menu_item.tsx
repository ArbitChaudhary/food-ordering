import useMenuItems from "../../hooks/use-menu-items";
import NavGroup from "./nav_group";

const MenuItem = () => {
  const { items } = useMenuItems();

  const navItems = items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup item={item} />;
      default:
        return (
          <div className="text-red-500 text-center font-medium text-lg">
            Menu Items Error
          </div>
        );
    }
  });
  return <div className="mainContainer">{navItems}</div>;
};

export default MenuItem;
