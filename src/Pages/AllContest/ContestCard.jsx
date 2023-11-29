import { Link } from "react-router-dom";
import TestFire from "../../Components/TestFire";

const ContestCard = ({contest}) => {
    const {_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,CreatorEmail,image}=contest || {}
    //  console.log(deadline);
     
  return (
    <>
       
      <div >
            <div className="h-60">
            <img src={image} className="object-cover object-center w-full h-full" alt="" />
            </div>
            <div>
            <h1>constest name : {name}</h1>
            <h1>count: {participation}</h1>
            <h1>count: {description.slice(0,10)}</h1>
            <h1>prize:{prize}</h1>
            <h1>price:${price}</h1>
            {/* <TestFire deadline={deadline}></TestFire> */}
            <h1>deadline: {deadline}</h1>
            <Link to={`/contest-details/${_id}`}>
            <button  className="bg-blue-500">Show details</button>
            </Link>
            </div>
       </div>
       
    </>
  );
};

export default ContestCard;