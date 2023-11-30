import { useState } from "react";

const MyContestTableRow = ({item,idx}) => {
    // const time=new Date()
    // console.log(item);
    const [currentDeadline, setCurrentDeadline] = useState(item.deadline);
    // const ittt=new Date(item?.deadline)
    const isOpen = new Date() > new Date(currentDeadline);
    // new Date() > new Date(currentDeadline);
    // console.log('current time ', time);
    // console.log('deadline time ', ittt);
    // console.log(isOpen);

  return (
    <>
      <tr
                        key={item._id}
                        className="hover:bg-gray-100 dark:hover:bg-purple-200"
                      >
                        <td className="p-4 w-4">
                          <div className="flex items-center">{idx + 1}</div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {item.ConName}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                          {item.type}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {item.deadline}
                        </td>
                        <td className="text-center">
                            {
                                new Date() >= new Date(item?.deadline) ? <p className="text-center text-red-500">Closed</p>
                                :
                                <p className="text-center text-green-500">Open</p>
                            }
                        </td>
                      </tr>
    </>
  );
};

export default MyContestTableRow;