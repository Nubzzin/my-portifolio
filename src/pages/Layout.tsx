import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Layout = () => (
  <div>
    <LanguageSwitcher />
    <Outlet />
  </div>
);

export default Layout;
