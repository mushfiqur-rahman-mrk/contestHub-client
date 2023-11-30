import Chart from "react-google-charts";
import DashContainer from "../../Components/Shared/DashContainer";
import DashTitle from "../../Components/Shared/DashTitle";

import UseUserStats from "../../Hooks/useUserStats";

const MyWinning = ({ item }) => {
  console.log(item);
  const stats = UseUserStats();
  const { winningCount, participationCount } = UseUserStats();
  console.log(stats?.userStat?.winningCount);
  console.log(winningCount,participationCount);
  const data = [
    ["Task", "Hours per Day"],
    ["Participation", stats?.userStat?.participationCount],
    ["Winning Contest",  stats?.userStat?.winningCount],
  ];

 

  return (
    <div className="min-h-[calc(100vh)]">
      <DashTitle title={"Winning Contest"}></DashTitle>
      <DashContainer>
         
        {stats?.userStat?.participationCount > 0 ? (
          <>
            <Chart
              chartType="PieChart"
              data={data}
              width={"100%"}
              height={"400px"}
            />
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

export default MyWinning;
