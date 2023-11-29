 import 'react-tabs/style/react-tabs.css';
import SubmissionTab from "./SubmissionTab";
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Hooks/useAuth';
import DashTitle from '../../../Components/Shared/DashTitle';
import axios from 'axios';
import SubmissionTabPnel from './SubmissionTabPnel';

const ContestSubmission = () => {
  const {user}=UseAuth()
  const axiosSecure=UseAxiosSecure()
  const { data:submissions, refetch } = useQuery({
    queryKey: ["submission"],
    queryFn: async () => {
       const res = await axios.get(`http://localhost:5000/submission/creator/${user?.email}`)
      return res.data;
    },
  });
   console.log('hello sub',submissions);
  return (
    <>
 
      <div className='min-h-[calc(100vh)]'>
        <DashTitle title={'Contest Submission'}></DashTitle>
      <div className="flex  justify-between items-center my-10 max-w-4xl mx-auto">
        <h1 className="uppercase text-lg font-semibold">
          total: {submissions?.length}{" "}
        </h1>
      </div>
      {/* <div className="max-w-4xl mx-auto mb-20">
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
                        user email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        contest name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                        contest type
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                      deadline
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-white"
                      >
                      Make Winner
                      </th>
                       
                       
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {submissions?.map((item, idx) => (
                      
                        <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-orange-200">
                          <td className="p-4 w-4">
                            <div className="flex items-center">{idx + 1}</div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {item.email}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {item.ConName}
                           </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              {item.type}
                          </td>
                          <td>
                             {item.deadline}
                          </td>
                          <td>
                            <button>make winner</button>
                          </td>
                           
                        </tr>
                       
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SubmissionTab submissions={submissions}></SubmissionTab>
      <SubmissionTabPnel></SubmissionTabPnel>

      </div>
    </>
  );
};

export default ContestSubmission;