import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://contest-hub-server-jet.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
 