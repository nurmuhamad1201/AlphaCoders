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
import Book from "./pages/Book/Book";
import Car from "./pages/Car/Car";
import Insurance from "./pages/insurance/insurance";
import Gift from "./pages/gift/gift";
import BookingConfirmation from "./components/BookingConfirmation";

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
        {
          path: "Book",
          element: <Book />,
        },
        {
          path: "Car",
          element: <Car />,
        },
        {
          path: "insurance",
          element: <Insurance />,
        },
        {
          path: "gift",
          element: <Gift />,
        },
        {
          path: "BookingConfirmation",
          element: <BookingConfirmation />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
