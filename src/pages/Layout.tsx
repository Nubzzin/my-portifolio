import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Layout() {
  return (
    <div>
      <Outlet />
      <LanguageSwitcher />
    </div>
  );
}

export default Layout;
