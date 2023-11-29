import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import TestFire from "../../Components/TestFire";
import ContestRegistration from "../../Components/Test/DLDisable";
import RegButton from "./RegButton";
import Container from "../../Components/Shared/Container";
import { FaUser } from "react-icons/fa";

const ContestDetails = () => {
  const {id} = useParams()
  console.log(id);
  const axiosSecure= UseAxiosSecure()
  const { data, refetch } = useQuery({
    queryKey: ["contest-details"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contest/${id}`);
      // const res = await axiosSecure.get("/users",{
      //   headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}
      // });
      return res.data;
    },
  });
  console.log('checkkkkkkkk',data);
  const {_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,CreatorEmail,image}=data || {}
   
  return (
    <div className=" mb-10">
      <div className="h-[40vh] w-full mb-5">
        <img src={image} className="h-full w-full object-cover object-center" alt="" />
      </div>

       <Container>
       <div className="grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-2">
        <div>
        <img src={image} alt="" />
        </div>
        <div>
          <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">{type}</p>
        <h1 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{name}</h1>
        <div className="flex justify-between">
        <h1 className="flex items-center gap-2">Participation:<FaUser></FaUser> {participation}</h1>
        <h1 className="flex items-center gap-2">Winning Prize: {prize}</h1>
        </div>
        <h1 className="mb-5 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">{description}</h1>
        <h1>what to submit: {instructions}</h1>
        
        <h1>{deadline}</h1>
        <h1>Registation will eands in:</h1>
        <TestFire deadline={deadline}></TestFire>
        <RegButton deadline={deadline} id={_id} price={price}></RegButton>
        </div>
       </div>
       </Container>
    </div>
  );
};

export default ContestDetails;