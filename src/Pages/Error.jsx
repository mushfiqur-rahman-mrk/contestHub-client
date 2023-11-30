import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
       <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="w-80 h-60">
        <img src="/src/assets/error.jpg" className="w-full h-full object-cover object-center" alt="" />
          </div>
          <div>
            <Link to={'/'}>
            <button className="px-5 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] text-white font-semibold rounded-md mt-10">Go Back To Home</button>
            </Link>
          </div>
       </div>
    </>
  );
};

export default Error;
