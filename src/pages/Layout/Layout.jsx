import { Outlet } from "react-router-dom";
import Header from "../../components/header";



function Layout() {
    return (
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white  ">
         
         <Header />
          <Outlet />
       
        
      </div>
    );
  }
  
  export default Layout;