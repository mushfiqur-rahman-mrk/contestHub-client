import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const UseWinner = () => {
  const [params, setParams] = useSearchParams();
  const contest = params.get("contest");
  const [checkWinner, setCheckWinner] = useState(null);

  const { data: contestWinner, refetch:okfetch } = useQuery({
    queryKey: ["contestWinner"],
    queryFn: async () => {
      const winRes = await axios.get(`https://contest-hub-server-jet.vercel.app/contest`);
      return winRes.data;
    },
  });

  useEffect(() => {
    const winfiltered = contestWinner?.filter((item) => item?.name === contest);
    if (winfiltered) {
        winfiltered?.map((item,idx)=>setCheckWinner(item))
    }
  }, [contest, contestWinner]);
  return {checkWinner,okfetch};
};

export default UseWinner;
