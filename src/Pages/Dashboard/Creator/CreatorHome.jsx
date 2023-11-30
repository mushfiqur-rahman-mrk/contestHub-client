import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import UseAuth from "../../../Hooks/useAuth";
import DashContainer from "../../../Components/Shared/DashContainer";
import CreatorStatsCard from "./CreatorStatsCard";

const CreatorHome = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=UseAuth()
    const {data}=useQuery({
        queryKey:['creator-stats'],
        queryFn: async ()=>{
            const res = await axios.get(`https://contest-hub-server-jet.vercel.app/creator-stats/${user?.email}`)
            return res.data;
        }
    })
  return (
    <>
       
      <DashContainer>
        <CreatorStatsCard data={data}></CreatorStatsCard>
      </DashContainer>
    </>
  );
};

export default CreatorHome;