import Layout from "@/components/layout/Layout";
import Login from "@/pages/formReleted/login";
import Tasks from "@/pages/Tasks/Tasks";
import Users from "@/pages/users/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
]);
export default routes;
