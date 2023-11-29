import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";
 
const UseAdmin = () => {
    const {user}=UseAuth()
    const axiosSecure=UseAxiosSecure()
    const {data:isAdmin, isPending: isAdminLoading}=useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data?.admin
        }
    })
    return {isAdmin,isAdminLoading}
  
};

export default UseAdmin;