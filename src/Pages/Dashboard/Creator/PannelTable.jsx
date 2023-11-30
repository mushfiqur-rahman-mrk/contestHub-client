import axios from "axios";
import MyContestTableRow from "../MyContestTableRow";

const PannelTable = ({ item, idx,refetch,okfetch }) => {
    const {_id,email,price,transactionId,deadline,ConName,type,creatorEmail,contestId}=item || {}
    const handleWinner=(email)=>{
        console.log('clicked',email);
        const winner={
            isWinner:true,
            winnerEmail:email,
            winnerName: '',
        }
        axios.patch(`https://contest-hub-server-jet.vercel.app/contest/winner/${contestId}`,winner)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                console.log('successful');
                okfetch()    
        }
        })

    }
  return (
    <>
 
      <tr className="hover:bg-gray-100 dark:hover:bg-purple-200">
        <td className="p-4 w-4">
          <div className="flex items-center">{idx + 1}</div>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
          {item?.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
          {item.email}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
          {item.deadline}
        </td>
        <td className="text-center">
            <button onClick={()=>handleWinner(item.email)} className="cursor-pointer">Make winner</button>
        </td>
      </tr>
    </>
  );
};

export default PannelTable;
