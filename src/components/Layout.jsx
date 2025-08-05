import { Outlet } from "react-router-dom";
import NavbarCoding from "./navbar/Nav";
import MainFooter from "./Footer/MainFooter";

const Layout = () => {
  return (
    <>
      <NavbarCoding />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default Layout;
