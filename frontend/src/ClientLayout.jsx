import { Outlet } from "react-router-dom";
import ClientSidebar from "./components/clientSidebar";

function ClientLayout() {
  return (
    <div className="flex">
      <ClientSidebar />
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
