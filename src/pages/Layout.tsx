import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Layout = () => (
  <div>
    <Outlet />
    <LanguageSwitcher />
  </div>
);

export default Layout;
