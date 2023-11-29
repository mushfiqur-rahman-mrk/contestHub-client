import { useNavigate, useSearchParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DashContainer from "../../../Components/Shared/DashContainer";
import qs from "query-string";
import SubmissionTabPnel from "./SubmissionTabPnel";
import TabCard from "./TabCard";

const SubmissionTab = ({ submissions }) => {
  const [params,setParams]=useSearchParams()
    const contest=params.get("contest")
  return (
    <>
      <DashContainer>
        <div className="flex items-center overflow-x-auto">
          {submissions?.map((item, idx) => (
            <TabCard key={idx} item={item} 
            selected={contest === item.name}
            ></TabCard>
          ))}
        </div>
      </DashContainer>
    </>
  );
};

export default SubmissionTab;
