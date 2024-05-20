import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <div className="sidebar">Sidebar</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
