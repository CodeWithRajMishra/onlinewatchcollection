import Footer from "./component/Footer";
import TopHeader from "./component/TopHeader";
import TopMenu from "./component/TopMenu";
import { Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
          <div id="topNav">
              <TopHeader/>
             <TopMenu/>
          </div>
           
             <hr />

             <Outlet/>

             <Footer/>

             
             

        </>
    )
}

export default Layout;