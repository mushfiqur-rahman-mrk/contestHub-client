import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";

const UseUserStats = () => {
  const { user } = UseAuth();
  const { data: userStat, refetch } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axios.get(
        `https://contest-hub-server-jet.vercel.app/user-stats/${user?.email}`
      );
      return res.data;
    },
  });
  return {userStat};
};

export default UseUserStats;
