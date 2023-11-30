import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/useAuth";
import DashContainer from "../../Components/Shared/DashContainer";
import DashTitle from "../../Components/Shared/DashTitle";
import MyWinning from "./MyWinning";
import MyContestTableRow from "./MyContestTableRow";
import UseUserStats from "../../Hooks/useUserStats";

const MyContest = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { winningCount, participationCount } = UseUserStats();
  const { data, refetch } = useQuery({
    queryKey: ["registerd-contest"],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/payment/${user?.email}`);
      const res = await axiosSecure.get(`https://contest-hub-server-jet.vercel.app/payment/user/${user?.email}`);
      // const res = await axiosSecure.get("/users",{
      //   headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}
      // });
      return res.data;
    },
  });
  const isOpen=new Date() > new Date(data?.deadline)
   
  
  console.log(data);
  return (
    <div className="min-h-[calc(100vh)] px-5">
      <DashTitle title={'My Contest'}></DashTitle>
      <DashContainer>
      <div className="flex  justify-between items-center my-5 max-w-4xl mx-auto">
        <h1 className="uppercase text-lg font-semibold">
          total participation: {data?.length}{" "}
        </h1>
      </div>
     


      {data?.length > 0 ? (
          <>
             <div className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed  ">
                  <thead className="bg-purple-600 text-white">
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
                        Contest Type
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {data?.map((item, idx) => (
                      <MyContestTableRow item={item} key={idx} idx={idx}></MyContestTableRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> 
          </>
        ) : (
          <>
             <div><h1 className="text-center text-[#602BF7] font-bold text-xl mt-10">No Data Available</h1></div>
          </>
        )}
      </DashContainer>
      
    </div>
  );
};

export default MyContest;
