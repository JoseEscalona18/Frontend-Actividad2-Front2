import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ }) => {
    let isLogged = false
    
    if (!isLogged){
        return <Navigate to="/Login"/>
    }
    
	return 
    <Outlet/>

  };
 
export default ProtectedRoute;