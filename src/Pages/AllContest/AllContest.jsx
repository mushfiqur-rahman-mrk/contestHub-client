import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
 
import Example from "../../Components/Test/TestTab";
import Container from "../../Components/Shared/Container";
 

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
      <div className="bg-red-500 w-full h-60 mb-5"></div>
 
       <Container>
       <Example contests={contests}></Example>
       </Container>
    </div>
  );
};

export default AllContest;