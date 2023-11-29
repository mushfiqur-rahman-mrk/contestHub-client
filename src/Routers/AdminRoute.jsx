import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/useAdmin";
import UseAuth from "../Hooks/useAuth";
import { BounceLoader } from "react-spinners";

const AdminRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const {isAdmin,isAdminLoading}=UseAdmin()
    const location=useLocation()
    if(loading || isAdminLoading){
        return <BounceLoader color="#36d7b7" />
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/'} state={{form:location}} replace></Navigate>
};  

export default AdminRoute;