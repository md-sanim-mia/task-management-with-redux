import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Naver></Naver>

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Layout;
