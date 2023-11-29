import { Outlet } from "react-router-dom";
import DashNav from "../Components/Navbar/DashNav";
import UseAuth from "../Hooks/useAuth";
import { BounceLoader } from "react-spinners";
import UseAdmin from "../Hooks/useAdmin";
import UseCreator from "../Hooks/useCreator";
const DashBoardLayout = () => {
  const {isAdminLoading}=UseAdmin()
  const {isCreatorLoading }=UseCreator()
  const {loading}=UseAuth()
  if(loading && isAdminLoading || isCreatorLoading){
    return <div className="flex justify-center items-center w-full h-screen"><BounceLoader color="#36d7b7" /></div>
  }
  return (
    <>
       
      
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-blue-300 w-full h-full">
          <DashNav></DashNav>
        </div>
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;