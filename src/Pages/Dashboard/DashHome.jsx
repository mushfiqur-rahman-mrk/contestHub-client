import { useQuery } from "@tanstack/react-query";
import DashTitle from "../../Components/Shared/DashTitle";
import UseAdmin from "../../Hooks/useAdmin";
import UseCreator from "../../Hooks/useCreator";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import AdminHome from "./Admin/AdminHome";
import CreatorHome from "./Creator/CreatorHome";
import UserHome from "./UserHome";

const DashHome = () => {
  const {isAdmin}=UseAdmin()
  console.log(isAdmin);
  const axiosSecure=UseAxiosSecure()
  const {isCreator}=UseCreator()
  console.log(isCreator);
  const {data}=useQuery({
    queryKey:['admin-stats'],
    queryFn: async ()=>{
      const res = await axios.get('http://localhost:5000/admin-stats')
      return res.data
    }
  })
  const isUser=isAdmin || isCreator
  console.log(data);
  return (
    <div className="min-h-[calc(100vh)]">
      <DashTitle title={'welcome home !'}></DashTitle>
      {
        isAdmin && <AdminHome data={data}></AdminHome>
      }
      {
        isCreator && <CreatorHome></CreatorHome>
      }
      {
        !isUser && <UserHome></UserHome>
      }
    </div>
  );
};

export default DashHome;