import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DashContainer from "../../../Components/Shared/DashContainer";
import PannelTable from "./PannelTable";
import UseWinner from "../../../Hooks/useWinner";

const SubmissionTabPnel = ({ item }) => {
  const [params, setParams] = useSearchParams();
  const contest = params.get("contest");
  const {checkWinner,okfetch}=UseWinner()
//   console.log('hook',iswinner.isWinner);
 
  const [contestDetail, setContestDetail] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ["Single-submission"],
    queryFn: async () => {
      const res = await axios.get(`https://contest-hub-server-jet.vercel.app/payment`);
      return res.data
    },
  });
 
 
  useEffect(()=>{
    const filtered = data?.filter((item) => item?.ConName === contest);
 
      if(filtered){
        setContestDetail(filtered);
      }else{
        setContestDetail([])
      }
      
  },[contest,data])

 
  return (
    <>
      <DashContainer>
        <h1 className="text-center mb-5 text-xl font-semibold">Contest Name: <span className="text-blue-500">{contest}</span></h1>
        <div>
        {
            checkWinner?.isWinner ? <>
                <div className="w-full bg-[#602BF7] text-white h-96 flex justify-center items-center">
                    <h1 className="text-xl">Winner of this Contest is {checkWinner?.winnerEmail}</h1>
                </div>
            </>
            :
            <>
                        <div className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed  ">
                  <thead className="bg-[#602BF7] text-white">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center"></div>
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium text-center tracking-wider  uppercase text-white"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200  ">
                  {
                contestDetail?.map((item,idx)=><PannelTable key={idx} item={item} idx={idx} refetch={refetch} okfetch={okfetch}></PannelTable>)
            }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
            </>
        }

            
        </div>
      </DashContainer>
    </>
  );
};

export default SubmissionTabPnel;
