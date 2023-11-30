import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import axios from "axios";

const UseCreatorStats = () => {
  const { user } = UseAuth();
  const { data } = useQuery({
    queryKey: ["creator-stats"],
    queryFn: async () => {
      const res = await axios.get(
        `https://contest-hub-server-jet.vercel.app/creator-stats/${user?.email}`
      );
      return res.data;
    },
  });
  return {data};
};

export default UseCreatorStats;


// #602BF7
// #F555ED
// #0E0E30