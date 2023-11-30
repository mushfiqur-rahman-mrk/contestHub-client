import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashHome from "../Pages/Dashboard/DashHome";
import MyWinning from "../Pages/Dashboard/MyWinning";
import MyContest from "../Pages/Dashboard/MyContest";
import AddContest from "../Pages/Dashboard/Creator/AddContest";
import CreatedContest from "../Pages/Dashboard/Creator/CreatedContest";
import ContestSubmission from "../Pages/Dashboard/Creator/ContestSubmission";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ManageContest from "../Pages/Dashboard/Admin/ManageContest";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
 
import Addform from "../Components/Test/Addform";
import Payment from "../Pages/Payment/Payment";
import EditContest from "../Pages/Dashboard/Creator/EditContest";
import axios from "axios";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";
 

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'all-contest',
            element: <AllContest></AllContest>
        },
        {
          path: 'contest-details/:id',
          element: <PrivetRoute><ContestDetails></ContestDetails></PrivetRoute>
        },
        {
          path:'payment/:id',
          element:<PrivetRoute><Payment></Payment></PrivetRoute>,
          // loader: (params) => fetch(`https://contest-hub-server-jet.vercel.app/contest/${params.id}`)
        }
 
    ]
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/register',
    element: <Register></Register>
  },
  {
    path:'/dash-board',
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/dash-board',
        element: <DashHome></DashHome>
      },
      // users route
      {
        path:'my-winning-contest',
        element: <MyWinning></MyWinning>
      },
      {
        path:'my-contest',
        element: <MyContest></MyContest>
        // element: <Addform></Addform>
      },
      // creator route
      {
        path: 'add-contest',
        element:<PrivetRoute><AddContest></AddContest></PrivetRoute>
      },
      {
        path: 'created-contest',
        element:<PrivetRoute><CreatedContest></CreatedContest></PrivetRoute>
      },
      {
        path: 'contest-submission',
        element: <PrivetRoute><ContestSubmission></ContestSubmission></PrivetRoute>
      },
      {
        path: 'edit-contest/:id',
        element: <EditContest></EditContest>,
        loader: ({params})=>fetch(`https://contest-hub-server-jet.vercel.app/pendingContest/${params.id}`)
      },
      // admin route
      {
        path: 'all-users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manage-contest',
        element:<AdminRoute><ManageContest></ManageContest></AdminRoute>
      }
    ]
  }


]);

export default Router;
