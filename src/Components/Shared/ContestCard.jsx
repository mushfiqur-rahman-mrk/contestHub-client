import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  
    const {_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,status,CreatorEmail,image}= contest || {}
 
  return (
    <>
      <div className="container rounded-xl">
          <div className="">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <div className="relative h-60">
              <img
                className="rounded-t-lg w-full object-cover object-center h-full "
                src={image}
                alt=""
              />
              <div className="absolute bottom-0"><img src="/src/assets/10006.png" alt="" /></div>
              </div>
              <div className="py-6 px-5 rounded-lg bg-white h-60">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  {name}
                </h1>
                <p className="text-gray-700 tracking-wide">
                  {description.slice(0,50)}
                </p>
                <Link to={`/contest-details/${_id} `}>
                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Show Detail
                </button>
                </Link>
              </div>
              <div className="absolute top-1 right-1 py-2 px-1 bg-white rounded-xl">
                <span className="text-md flex justify-center items-center gap-1"><FaUser/> {participation}</span> 
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContestCard;
