import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Process from "./pages/process/Process";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";
import Reviews from "./pages/review/Review";

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
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "process",
          element: <Process />,
        },
        {
          path: "testimonials",
          element: <Testimonials />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "review",
          element: <Reviews />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
