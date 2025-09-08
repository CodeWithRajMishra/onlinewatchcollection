import TopHeader from "./component/TopHeader";
import TopMenu from "./component/TopMenu";
import { Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
             <TopHeader/>
             <TopMenu/>
             <hr />

             <Outlet/>

             
             

        </>
    )
}

export default Layout;