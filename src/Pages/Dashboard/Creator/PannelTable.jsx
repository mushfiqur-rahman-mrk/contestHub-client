import axios from "axios";
import MyContestTableRow from "../MyContestTableRow";
import Swal from "sweetalert2";

const PannelTable = ({ item, idx, refetch, okfetch }) => {
  const {
    _id,
    email,
    price,
    transactionId,
    deadline,
    ConName,
    type,
    creatorEmail,
    contestId,
  } = item || {};
  const handleWinner = (email, name) => {
    const isRegistrationDisabled = new Date() > new Date(deadline);

    if(isRegistrationDisabled){
      const winner = {
        isWinner: true,
        winnerEmail: email,
        winnerName: name,
      };
      axios
        .patch(
          `https://contest-hub-server-jet.vercel.app/contest/winner/${contestId}`,
          winner
        )
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            console.log("successful");
            okfetch();
          }
        });
    }else{
      Swal.fire({
        title: "Deadline is not over yet.!",
        text: "Are you sure you want to fix the winner",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, fix the winner",
      }).then((result) => {
        if (result.isConfirmed) {
          const winner = {
            isWinner: true,
            winnerEmail: email,
            winnerName: name,
          };
          axios
            .patch(
              `https://contest-hub-server-jet.vercel.app/contest/winner/${contestId}`,
              winner
            )
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                 
                okfetch();
              }
            });
        }
      });
    }



  };
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
          <button
            onClick={() => handleWinner(item.email, item.name)}
            className="cursor-pointer"
          >
            Make winner
          </button>
        </td>
      </tr>
    </>
  );
};

export default PannelTable;
