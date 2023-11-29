 
import DashContainer from "../../../Components/Shared/DashContainer";
import StatsCard from "./StatsCard";

const AdminHome = ({data}) => {

  return (
    <>
        <DashContainer>
      <StatsCard data={data}></StatsCard>
        </DashContainer>
    </>
  );
};

export default AdminHome;
 