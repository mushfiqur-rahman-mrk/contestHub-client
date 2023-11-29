import axios from "axios";
 
import UseAuth from "./useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://contest-hub-server-jet.vercel.app",
  // headers:{authorization: `Bearer ${localStorage.getItem('contest-token')}`}
});

const UseAxiosSecure = () => {
  
  const {logOut}=UseAuth()  || {}

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("contest-token");
       
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

    // interseptor for 401 and 403 status
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response.status;
        console.log("status error in the interseptor", status);
        if (status === 401 || status === 403) {
          await logOut();
          // .then(res=>{
          //   console.log(res.user);
          // })
          // .catch(err=>{
          //   console.log(err.message);
          // })
          console.log('error come ');
          <Navigate to={'/login'}></Navigate>
        }
        return Promise.reject(error);
      }
    );




  return axiosSecure;
};

export default UseAxiosSecure;
