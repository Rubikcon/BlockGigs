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

      <div className="block md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <DashboardMobileNav />
      </div>

      <div className="grid mt-20 md:mt-0 grid-flow-row md:flex-1 mt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
