import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";
 

const UseCreator = () => {
    const {user}=UseAuth()
    const axiosSecure=UseAxiosSecure()
    const {data:isCreator, isPending: isCreatorLoading}=useQuery({
        queryKey:[user?.email, 'isCreator'],
        enabled: !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/Creator/${user?.email}`)
            return res.data?.creator
        }
    })
    return {isCreator,isCreatorLoading}
  
};

export default UseCreator;
 