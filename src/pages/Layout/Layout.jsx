import { Outlet } from "react-router-dom";



function Layout() {
    return (
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white  ">
         
         
          <Outlet />
       
        
      </div>
    );
  }
  
  export default Layout;