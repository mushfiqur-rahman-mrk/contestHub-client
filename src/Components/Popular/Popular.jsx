import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import ContestCard from "../Shared/ContestCard";
import Container from "../Shared/Container";
import axios from "axios";
import { useState } from "react";

 
const Popular = () => {
  const axiosPublic = UseAxiosPublic();
  const [contests,setContests]=useState([])

  const { data, refetch } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      // const res = await axiosPublic.get("/contest/popular?sortField=participation&sortOrder=desc");
      const res = await axios.get("https://contest-hub-server-jet.vercel.app/contest?sortField=participation&sortOrder=desc");
      return setContests(res.data);
    },
  });

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 px-5">
        {contests?.slice(0,6).map((contest) => (
          <ContestCard contest={contest} key={contest._id}></ContestCard>
        ))}
      </div>
    </Container>
  );
};

export default Popular;
