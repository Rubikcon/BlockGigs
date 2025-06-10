import { Outlet } from "react-router-dom";
import ClientSidebar from "./components/clientSidebar";
import DashboardMobileNav from "./components/DashboardMobileNav";

function ClientLayout() {
  return (
    <div className="grid grid-flow-row md:flex">
      {/* Sidebar - Hidden on small screens, visible on medium and up */}
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      {/* DashboardMobileNav - Visible on small screens, hidden on medium and up */}
      {/* <div className="block md:hidden my-5"> */}
      <div className="block md:hidden sticky top-0 z-50 bg-white shadow-sm">
        <DashboardMobileNav />
      </div>
      <div className="grid grid-flow-row md:flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
