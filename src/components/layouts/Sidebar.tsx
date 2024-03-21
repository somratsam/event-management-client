import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-300 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col text-black gap-2">
        <NavLink
          to="/admin"
          className="p-3 bg-gray-500 rounded-md hover:bg-gray-700  hover:text-white transition-all flex items-center gap-2"
        >
          <MdOutlineDashboard className="shrink-0" />{" "}
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className="p-3 bg-gray-500 rounded-md hover:bg-gray-700  hover:text-white transition-all flex items-center gap-2"
        >
          <MdOutlineDashboard className="shrink-0" />{" "}
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className="p-3 bg-gray-500 rounded-md hover:bg-gray-700  hover:text-white transition-all flex items-center gap-2"
        >
          <MdOutlineDashboard className="shrink-0" />{" "}
          <span className="truncate">Service List</span>
        </NavLink>
        <NavLink
          to="/admin/add-event"
          className="p-3 bg-gray-500 rounded-md hover:bg-gray-700  hover:text-white transition-all flex items-center gap-2"
        >
          <MdOutlineDashboard className="shrink-0" />{" "}
          <span className="truncate">Add Event</span>
        </NavLink>
        <NavLink
          to="/admin/event-list"
          className="p-3 bg-gray-500 rounded-md hover:bg-gray-700  hover:text-white transition-all flex items-center gap-2"
        >
          <MdOutlineDashboard className="shrink-0" />{" "}
          <span className="truncate">Event List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
