import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const TabCard = ({item,selected}) => {
    const [params,setParams]=useSearchParams()
    const contest=params.get("contest")
    console.log(contest);
    const navigate=useNavigate()
    const handleClick=(name)=>{
      console.log('clicked',name);
      let currentQuery={}
      if(params){
        currentQuery = qs.parse(params.toString())
      }
      const updatedQuery = {...currentQuery, contest: name}
            const url = qs.stringifyUrl({
                url:'/dash-board/contest-submission',
                query: updatedQuery,
            })
            navigate(url)
    }
  return (
    <>
        <div onClick={()=>handleClick(item?.name)}>
            <h1  className={`flex flex-col mb-5 justify-center text-neutral-500 items-center  p-3 border-b-2 hover:text-neutral-800 cursor-pointer transition ${selected ? 'border-[#602BF7] text-neutral-950 bg-gradient-to-b from-transparent to-[#602BF7] font-semibold' : ''}`}>{item.name}</h1>
        </div>
    </>
  );
};

export default TabCard;