import { createBrowserRouter } from "react-router-dom";
import App from "../App";



import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import About from "../pages/About";
import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ServiceList from "../pages/admin/ServiceList";
import AddService from "../pages/admin/AddService";
import EventList from "../pages/admin/EventList";
import AddEvent from "../pages/admin/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
      {
        path: "service-list",
        element: <ServiceList></ServiceList>
      },
      {
        path:'add-service',
        element:<AddService></AddService>
      },
      {
        path: "event-list",
        element: <EventList></EventList>
      },
      {
        path:'add-event',
        element:<AddEvent></AddEvent>
      }
    ],
  },
]);

export default router;
