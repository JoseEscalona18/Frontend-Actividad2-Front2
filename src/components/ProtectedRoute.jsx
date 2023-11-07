import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ }) => {
    const user = document.cookie.includes('token=');
    
    if (!user){
        return <Navigate to="/Login"/>
    }
    
	return 
    <Outlet/>

  };
 
export default ProtectedRoute;