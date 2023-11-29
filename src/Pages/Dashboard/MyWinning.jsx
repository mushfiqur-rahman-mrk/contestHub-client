import DashContainer from "../../Components/Shared/DashContainer";
import DashTitle from "../../Components/Shared/DashTitle";

const MyWinning = ({item}) => {
  console.log(item);
  return (
    <div className="min-h-[calc(100vh)]">
      <DashTitle title={'Winning Contest'}></DashTitle>
       <DashContainer>

       </DashContainer>
    </div>
  );
};

export default MyWinning;