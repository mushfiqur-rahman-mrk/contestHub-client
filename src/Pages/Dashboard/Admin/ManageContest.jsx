import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import ManageRow from "./ManageRow";
import DashTitle from "../../../Components/Shared/DashTitle";

const ManageContest = () => {
  const axiosSecure=UseAxiosSecure()
  const { data:contests, refetch } = useQuery({
    queryKey: ["manage-contest"],
    queryFn: async () => {
      // const res = await axiosSecure.get("/pendingContest");
      const res = await axiosSecure.get("/pendingContest",{
        headers:{authorization: `Bearer ${localStorage.getItem('contest-token')}`}
      });
      return res.data;
    },
  });
  console.log(contests);






  return (
    <div className="min-h-[100vh] px-5">
      <DashTitle title={'Manage Contest'}></DashTitle>
         
      <div className="max-w-4xl mx-auto my-20">
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
                       Contest Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                       Creator email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Contest type
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                       Action
                      </th>
                       
                       
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {
                      contests?.map((contest,idx)=><ManageRow key={contest._id} refetch={refetch} contest={contest} idx={idx}></ManageRow>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageContest;