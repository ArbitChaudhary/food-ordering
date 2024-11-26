import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Main from "./main";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
export default DashboardLayout;
