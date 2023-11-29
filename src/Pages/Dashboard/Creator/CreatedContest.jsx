import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/useAuth";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import DashTitle from "../../../Components/Shared/DashTitle";

const CreatedContest = () => {
  const {user}=UseAuth()
  console.log(user?.email);
  const axiosSecure=UseAxiosSecure()
  const { data, refetch } = useQuery({
    queryKey: ["creator-contests"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/pendingContest/creator/${user?.email}`);
      // const res = await axiosSecure.get("/users",{
      //   headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}
      // });
      return res.data;
    },
  });
  console.log(data);
  const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.delete(`/pendingContest/${id}`)
          .then(res=>{
              console.log(res.data);
              if(res.data.deletedCount > 0){
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                  refetch()
              }
          })
         
      }
    });
  }
 
  return (
    <>
       
      <div className="min-h-[calc(100vh)]">
        <DashTitle title={'My Created Contest'}></DashTitle>
      <div className="flex  justify-between items-center my-5 max-w-4xl mx-auto">
        <h1 className="uppercase text-md font-semibold">
          my submitted contest: {data?.length}
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed  ">
                  <thead className="bg-orange-500 text-white">
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
                        Type
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
                    {data?.map((item, idx) => (
                      
                        <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-orange-200">
                          <td className="p-4 w-4">
                            <div className="flex items-center">{idx + 1}</div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {item.type}
                           </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {
                                item?.status === 'pending' ? <p className="text-yellow-600">pending</p>
                                :
                                <p className="text-green-600">approved</p>
                             }
                          </td>
                          <td>
                            {
                              item.status === 'pending' ? <>
                                        <button className="px-5 text-red-500"
                              onClick={()=>handleDelete(item._id)}
                             ><FaTrashAlt></FaTrashAlt></button>

                             <Link to={`/dash-board/edit-contest/${item._id}`}>
                             <button className="text-green-700 pl-4" 
                            ><FaEdit /></button>
                             </Link>
                              </>
                              :
                              <button className="text-green-700 pl-4 text-xl"
                                
                            ><FaCheck /></button>
                            }
   
                          </td>
                           
                        </tr>
                       
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CreatedContest;