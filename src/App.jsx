import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
  
 
 
import Bromhot from "./pages/bromhot/bromhot";
import About from "./pages/about/about";
import Ticket from "./pages/ticket/ticket";
import Travel from "./pages/travel/travel";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import Confirmation from "./pages/confirmation/confirmation";
import Seat from "./pages/Seat/Seat";
import Baggage from "./pages/baggage/baggage";

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
        {
          path: "confirmation",
          element: <Confirmation />,
        },
        {
          path: "Seat",
          element: <Seat />,
        },
        {
          path: "baggage",
          element: <Baggage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
