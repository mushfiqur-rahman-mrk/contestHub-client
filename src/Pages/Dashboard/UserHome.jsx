import { FaEdit, FaPlus, FaRegEdit, FaUserEdit } from "react-icons/fa";
import DashContainer from "../../Components/Shared/DashContainer";
import UseAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Button, Progress } from "keep-react";
import { ModalComponent } from "../../Components/Shared/Modal/Modal";
import { useEffect, useState } from "react";
import UseUserStats from "../../Hooks/useUserStats";
 

const UserHome = () => {
  const {user}=UseAuth()
  const [winningPercent,setWinningPercent]=useState(0)
  const {winningCount,participationCount}=UseUserStats()
 
  useEffect(()=>{
    if (participationCount > 0) {
      const percentage = (winningCount / participationCount) * 100;
      setWinningPercent(percentage);
    } else {
      setWinningPercent(0);
    }
  },[winningCount,participationCount])



  return (
    <>
      <DashContainer>
        <div className="px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
            <div className="relative rounded-full">
              <div className="w-80 h-80">
              <img src={user?.photoURL} className="object-cover rounded-full object-center w-full h-full" alt="" />
              </div>
              
              <div className="absolute top-[10%] left-[10%]">
                
                <div className="bg-blue-600 p-1 rounded-full text-white">
                   <ModalComponent title={<FaPlus></FaPlus>} isProfile={true}></ModalComponent>
                </div>
                </div>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <h1 className="font-semibold text-xl">Name:</h1>
              <h1 className="flex items-center gap-4">{user?.displayName}<ModalComponent title={<FaRegEdit></FaRegEdit>}></ModalComponent></h1>
              
              </div>
              <div className="flex items-center gap-5 mt-5">
                <h1 className="font-semibold text-xl">Email:</h1>
              <h1>{user?.email}</h1>
              </div>
 
            </div>
          </div>
        </div>
        
        <div className="my-10 mx-10">
          <h1 className="font-bold text-xl  mb-5">Winning Percentage: </h1>
          <Progress
        progress={winningPercent}
        color="info"
        rounded={true}
        labelProgress={true}
      />
        </div>
      </DashContainer>
       
    </>
  );
};

export default UserHome;