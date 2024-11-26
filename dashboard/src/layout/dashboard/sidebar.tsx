import Logo from "../../compnents/logo/logo";
import MenuItem from "./menu_item";

const Sidebar = () => {
  return (
    <div className={`h-screen w-[250px] max-w-[250px] relative`}>
      <div className={`fixed h-screen w-[250px] max-w-[250px] bg-[#002D62]`}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center pt-4">
            <Logo className="w-[100px] h-[90px]" />
          </div>
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
