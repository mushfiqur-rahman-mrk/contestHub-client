import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const AllUsers = () => {
  const axiosSecure=UseAxiosSecure()
  const { data:users, refetch } = useQuery({
    queryKey: ["manage-users"],
    queryFn: async () => {
      // const res = await axiosSecure.get("/users");
      const res = await axiosSecure.get("/users",{
        headers:{authorization: `Bearer ${localStorage.getItem('contest-token')}`}
      });
      return res.data;
    },
  });
  console.log(users);
  const handleUser=(item,e)=>{
    const id=item?._id;
    const role=e.target.value

    console.log(e.target.value);
    axiosSecure.patch(`/users/updateRole`,{id,role})
    .then(res=>{
      if(res.data.modifiedCount > 0){
        toast(`'${item.name}' is an ${role} now `)
      }
      refetch()
    })


  }



  return (
    <>
    <div className="flex  justify-between items-center my-10 max-w-3xl mx-auto">
        <h1 className="uppercase text-lg font-semibold">
          total users: {users?.length}{" "}
        </h1>
      </div>
      <div className="max-w-3xl mx-auto mb-20">
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        role
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                       Update role
                      </th>
                       
                       
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {users?.map((item, idx) => (
                      
                        <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-orange-200">
                          <td className="p-4 w-4">
                            <div className="flex items-center">{idx + 1}</div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {item.email}
                           </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                             {/* {item.role} */}
                             {
                              item?.role === 'admin' ? <p className="text-blue-500">Admin</p>
                              :
                              item?.role === 'creator' ? <p className="text-yellow-500">Creator</p>
                              :
                              <p className="text-green-500">User</p>
                             }
                          </td>
                          <td>
                            <select
                               
                              value={item.role}
                              className="border w-full rounded-md p-1 outline-orange-400"
                              onChange={(e)=>handleUser(item,e)}
                            >
                            <option disabled value={'default'}>
                              Select User role
                            </option>
                              <option value="user">User</option>
                              <option value="creator">Creator</option>
                              <option value="admin">Admin</option>
                            </select>
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
        
    </>
  );
};

export default AllUsers;