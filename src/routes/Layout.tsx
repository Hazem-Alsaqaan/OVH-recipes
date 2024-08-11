import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="px-8 max-sm:px-2 pt-40 pb-20 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
