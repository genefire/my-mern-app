import {Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

 const sidewidth = {
    width:'350px',

 } 
 const margintop = {
    marginTop:'120px',
 } 
const AdminLayout = () =>{
    return (
        <div className="container" style={margintop}>     
            <div className="d-flex align-items-left">
                
                <div class="d-flex flex-column flex-shrink-0 p-3 bg-white minheight" style={sidewidth}>
                  
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"><span class="fs-4">Hello, Gene Abano!</span>
                    </a>
                    <hr />
                    <Sidebar />         
                </div>
        
                <div className="ps-4 w-100">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}
export default AdminLayout;