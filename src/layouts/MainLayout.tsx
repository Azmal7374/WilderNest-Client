import Navbar from "@/pages/share/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>This is Footer</div>
    </div>
  );
};

export default MainLayout;