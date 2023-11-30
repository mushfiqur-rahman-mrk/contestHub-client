import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import TestFire from "../../Components/TestFire";
import ContestRegistration from "../../Components/Test/DLDisable";
import RegButton from "./RegButton";
import Container from "../../Components/Shared/Container";
import { FaTrophy, FaUser } from "react-icons/fa";
 

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
      <div className="bg-gradient-to-r from-[#341786] to-[#0E0E30] w-full h-60 mb-5 relative">
        <div className="absolute bottom-0 right-0 mb-[-10px]"><img src="/src/assets/10009.png" alt="" /></div>
      </div>

       <Container>
       <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font tracking-widest uppercase text-purple-600">{type}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <span className="text-gray-600 ml-3 flex items-center gap-3"><FaUser></FaUser>{participation}</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
          <span className="text-gray-600 ml-3 flex items-center gap-3"><FaTrophy/>$ {prize}</span>
          </span>
        </div>
        <p className="leading-relaxed text-gray-900">{description}</p>
        <div className="mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         <p className="font-semibold mb-3 text-purple-600">Submission Instruction:</p> 
         <p>{instructions}</p>
         <div className="text-black mt-10">
         <p className="font-semibold mb-3 text-purple-600">Registation will eands in:</p>
         
        <TestFire deadline={deadline}></TestFire>
        </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="title-font font-medium text-2xl text-gray-900">Reg fee: ${price}</span>
          
        <div>
        <RegButton deadline={deadline} id={_id} price={price}></RegButton>
        </div>
 
        </div>
      </div>
    </div>
  </div>
</section>




       
       </Container>
    </div>
  );
};

export default ContestDetails;