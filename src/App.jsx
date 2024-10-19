import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
  
 
 
import Bromhot from "./pages/bromhot/bromhot";
import About from "./pages/about/about";
import Ticket from "./pages/ticket/ticket";
import Travel from "./pages/travel/travel";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "bromhot",
          element: <Bromhot />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "ticket",
          element: <Ticket />,
        },
        {
          path: "travel",
          element: <Travel />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
