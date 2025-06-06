import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
