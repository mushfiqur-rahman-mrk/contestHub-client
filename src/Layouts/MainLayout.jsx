import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import UseAuth from "../Hooks/useAuth";
import { BounceLoader } from "react-spinners";

const MainLayout = () => {
  const {loading}=UseAuth()
  if(loading){
    return <BounceLoader color="#36d7b7" />
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