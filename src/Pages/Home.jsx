import AdBanner from "../Components/Advertisment/AdBanner";
import ContestWinner from "../Components/Advertisment/ContestWinner";
 
import Banner from "../Components/Banner/Banner";
import BestCreator from "../Components/BestCreator/BestCreator";
import Drop from "../Components/DropBtn/Drop";
import DropDown from "../Components/DropBtn/DropDown";
import Popular from "../Components/Popular/Popular";
import DLDisable from "../Components/Test/DLDisable";
import TestFire from "../Components/TestFire";

const Home = () => {

  return (
    <div className="mb-10">
       <Banner></Banner>
       <Popular></Popular>
        <AdBanner></AdBanner>   
        <ContestWinner></ContestWinner>
       <BestCreator></BestCreator>
      <DLDisable></DLDisable>
    </div>
  );
};

export default Home;