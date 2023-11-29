import { FaCheck, FaTrashAlt } from "react-icons/fa";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageRow = ({contest,idx,refetch}) => {
    // const {_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,CreatorEmail,image,status}=contest || {}
    
    // const status={}
    // const approvedContest={_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,CreatorEmail,image,status}
    const axiosSecure= UseAxiosSecure()


    const handleDelete=async(id)=>{
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
  
    const handleApprove= async(contest,id)=>{
  
      const approve= await axiosSecure.patch(`pendingContest`,{id:id})
      if(approve.data.modifiedCount > 0){
        const res= await axiosSecure.post('/contest', contest)
          console.log(res.data);
          if(res.data.insertedId){
            toast.success(`${contest?.name} is successfully approved`)
          }
        }
  
        refetch()
    }


  return (
    <>
       <tr className="hover:bg-gray-100 dark:hover:bg-orange-200">
                          <td className="p-4 w-4">
                            <div className="flex items-center">{idx + 1}</div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {contest.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {contest.CreatorEmail}
                           </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                             {contest?.type}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                             {
                                contest?.status === 'pending' ? <p className="text-yellow-600">pending</p>
                                :
                                <p className="text-green-600">approved</p>
                             }
                          </td>
                          <td>
                             {
                                contest?.status === 'pending' ? <>
                                    <button className="px-5 text-red-500"
                              onClick={()=>handleDelete(contest._id)}
                             ><FaTrashAlt></FaTrashAlt></button>

                             <button className="text-green-700 pl-4"
                              onClick={()=>handleApprove(contest,contest._id)} 
                            ><FaCheck /></button>
                                </>


                                :
                                <button className="px-5 text-red-500"
                              onClick={()=>handleDelete(contest._id)}
                             ><FaTrashAlt></FaTrashAlt></button>
                             }
                          </td>
                           
                        </tr>
    </>
  );
};

export default ManageRow;