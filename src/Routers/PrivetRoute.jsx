import { BounceLoader } from "react-spinners";
import UseAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const location=useLocation()
    if(loading){
        return <BounceLoader color="#36d7b7" />
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>

 
};

export default PrivetRoute;