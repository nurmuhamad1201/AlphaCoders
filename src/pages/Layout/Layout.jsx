import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/Footer";



function Layout() {
    return (
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white  ">
         
         <Header />
          <Outlet />
       
        <Footer />
      </div>
    );
  }
  
  export default Layout;