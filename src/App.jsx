import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
  
import Dashboard from "./pages/dashboard/dashboard";
import Courses from "./pages/courses/courses";
import Students from "./pages/students/students";
import Teachers from "./pages/teachers/teachers";
import Payments from "./pages/payments/payments";
import Reports from "./pages/reports/reports";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "students",
          element: <Students />,
        },
        {
          path: "teachers",
          element: <Teachers />,
        },
        {
          path: "payments",
          element: <Payments />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
