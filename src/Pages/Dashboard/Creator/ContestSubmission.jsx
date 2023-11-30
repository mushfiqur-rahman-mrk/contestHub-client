 import 'react-tabs/style/react-tabs.css';
import SubmissionTab from "./SubmissionTab";
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Hooks/useAuth';
import DashTitle from '../../../Components/Shared/DashTitle';
import axios from 'axios';
import SubmissionTabPnel from './SubmissionTabPnel';
import UseCreatorStats from '../../../Hooks/useCreatorStats';

const ContestSubmission = () => {
  const {user}=UseAuth()
 

  const creatorStats=UseCreatorStats()
  console.log(creatorStats?.data?.myContest);

  const axiosSecure=UseAxiosSecure()
  const { data:submissions, refetch } = useQuery({
    queryKey: ["submission"],
    queryFn: async () => {
       const res = await axios.get(`https://contest-hub-server-jet.vercel.app/submission/creator/${user?.email}`)
      return res.data;
    },
  });
   console.log('hello sub',submissions);
  return (
    <>
 
      <div className='min-h-[calc(100vh)] mb-10'>
        <DashTitle title={'Contest Submission'}></DashTitle>

      {
        creatorStats?.data?.myContest > 0 ? <>
        <div className="flex  justify-between items-center my-10 max-w-4xl mx-auto">
        <h1 className="uppercase text-lg font-semibold">
          total: {submissions?.length}{" "}
        </h1>
      </div>

      <SubmissionTab submissions={submissions}></SubmissionTab>
      <SubmissionTabPnel></SubmissionTabPnel>
        </>
        :
        <>
        <div className="w-full h-[20vh] flex justify-center items-center font-bold text-xl"><h1>No Data availavle</h1></div>
        </>
      }
      

      </div>
    </>
  );
};

export default ContestSubmission;