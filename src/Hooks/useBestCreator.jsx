import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosPublic from "./useAxiosPublic";

const UseBestCreator = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const { data: bestCreator } = useQuery({
    queryKey: ["best-creator"],
    queryFn: async () => {
      const res = await axiosPublic.get("/best-creator");
      return res.data;
    },
  });
  return bestCreator;
};

export default UseBestCreator;
