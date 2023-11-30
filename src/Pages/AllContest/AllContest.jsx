import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
 
import Example from "../../Components/Test/TestTab";
import Container from "../../Components/Shared/Container";
import Title from "../../Components/Shared/Title";
import art from '/src/assets/10009.png'

const AllContest = () => {
  const axiosSecure=UseAxiosSecure()
  const { data:contests, refetch } = useQuery({
    queryKey: ["allContests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contest");
      // const res = await axiosSecure.get("/users",{
      //   headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}
      // });
      return res.data;
    },
  });
  console.log(contests);
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#341786] to-[#0E0E30] w-full h-60 mb-5 relative">
        <div className="absolute bottom-0 right-0 mb-[-10px]"><img src={art} alt="" /></div>
      </div>
      <Title title={'All Contest'}></Title>
       <Container>
       <Example contests={contests}></Example>
       </Container>
    </div>
  );
};

export default AllContest;