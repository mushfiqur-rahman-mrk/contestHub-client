import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import UseAuth from "../Hooks/useAuth";
import { BounceLoader } from "react-spinners";

const MainLayout = () => {
  const {loading}=UseAuth()
  if(loading){
    return <div className="h-screen w-full flex justify-center items-center"><BounceLoader color="#602BF7" /></div>
  }
  return (
    <>
        <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </>
  );
};

export default MainLayout;