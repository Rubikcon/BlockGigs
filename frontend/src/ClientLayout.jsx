import { Outlet } from "react-router-dom";
import ClientSidebar from "./components/clientSidebar";

function ClientLayout() {
  return (
    <div className="grid grid-flow-row md:flex">
      <ClientSidebar />
      <div className="grid grid-flow-row md:flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
