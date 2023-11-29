import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import ContestCard from "../Shared/ContestCard";
import Container from "../Shared/Container";

const Popular = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: contests, refetch } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest");
      return res.data;
    },
  });

  return (
    <Container>
      <div className=" bg-[#1f2340] grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 px-3">
        {contests?.map((contest) => (
          <ContestCard contest={contest} key={contest._id}></ContestCard>
        ))}
      </div>
    </Container>
  );
};

export default Popular;
