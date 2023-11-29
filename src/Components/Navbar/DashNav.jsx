import { BsCalendarEvent, BsHouse } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import UseAdmin from "../../Hooks/useAdmin";
import UseCreator from "../../Hooks/useCreator";

const DashNav = () => {
  const {isAdmin}=UseAdmin()
  
  const {isCreator}=UseCreator()
  
    const navLinks = [
        {
          id: 1,
          text: 'Home',
          path: '/dash-board',
        },
        {
          id: 2,
          text: 'My winning Contest',
          path: '/dash-board/my-winning-contest',
        },
        {
          id: 3,
          text: 'My contest',
          path: '/dash-board/my-contest',
        },
        // creator route
        {
            id: 4,
            text: 'add-contest',
            path: '/dash-board/add-contest'
        },
        {
          id:5,
          text:'My Created Contest',
          path:'/dash-board/created-contest'
        },
        {
          id:6,
          text:'Contest submission',
          path:'/dash-board/contest-submission'
        },
        //admin routes
        {
          id:7,
          text:'Manage Users',
          path:'/dash-board/all-users'
        },
        {
          id:8,
          text:'Manage Contest',
          path:'/dash-board/manage-contest'
        },
        {
          id:15,
          text:'home',
          path:'/'
        } 
      ];

    const adminNavLinks=[
      {
        id: 14,
        text: 'DashBoard Home',
        path: '/dash-board'
    },
      {
        id:11,
        text:'Manage Users',
        path:'/dash-board/all-users'
      },
      {
        id:12,
        text:'Manage Contest',
        path:'/dash-board/manage-contest'
      },
    ]
    const creatorNavLinks=[
      {
        id: 14,
        text: 'DashBoard Home',
        path: '/dash-board'
    },
      {
        id:15,
        text: 'Add new Contest',
        path: '/dash-board/add-contest'
    },
    {
      id:16,
      text:'My Created Contest',
      path:'/dash-board/created-contest'
    },
    {
      id:17,
      text:'Contest submission',
      path:'/dash-board/contest-submission'
    },
 
    ]
    const userNavLinks=[
    {  id: 19,
      text: 'Home',
      path: '/dash-board',
    },
    {
      id: 20,
      text: 'My winning Contest',
      path: '/dash-board/my-winning-contest',
    },
    {
      id:21,
      text: 'My contest',
      path: '/dash-board/my-contest',
    },
 
    ]
    const homeLinks=[
      {
        id: 22,
        text: 'Home',
        path:'/'
      }
    ]
    const isUser=isAdmin || isCreator
    console.log('user',isUser);
 
  return (
    <>
       <div className="flex flex-col items-center gap-5 my-10">
                {/* {
                    navLinks?.map(link=> (
                        <NavLink to={link.path} key={link.id}
                            className={({isActive})=> isActive ? 'px-5 text-[#EEFF25] font-semibold' : 'px-5 text-white font-semibold'}
                        >
                            {link.text}
                        </NavLink>
                    ))
                } */}
                {/* admin nav links */}
              {
                isAdmin && adminNavLinks.map(link=> (
                  <NavLink to={link.path} key={link.id}
                      className={({isActive})=> isActive ? 'px-5 text-[#EEFF25] font-semibold' : 'px-5 text-white font-semibold'}
                  >
                      {link.text}
                  </NavLink>
              ))
              }  

              {/* creator nav links */}
              {
                isCreator && creatorNavLinks.map(link=> (
                  <NavLink to={link.path} key={link.id}
                      className={({isActive})=> isActive ? 'px-5 text-[#EEFF25] font-semibold' : 'px-5 text-white font-semibold'}
                  >
                      {link.text}
                  </NavLink>
              ))
              }
              
                {
                  !isUser &&  userNavLinks.map(link=> (
                    <NavLink to={link.path} key={link.id}
                        className={({isActive})=> isActive ? 'px-5 text-[#EEFF25] font-semibold' : 'px-5 text-white font-semibold'}
                    >
                        {link.text}
                    </NavLink>
                ))
                }
 
             
       </div>
       <hr />
       <div className="flex justify-center items-center mt-5">
       {
                  homeLinks.map(link=> (
                    <NavLink to={link.path} key={link.id}
                        className={({isActive})=> isActive ? 'px-5 text-[#EEFF25] font-semibold' : 'px-5 text-white font-semibold'}
                    >
                        {link.text}
                    </NavLink>
                ))
                }
       </div>
    </>
  );
};

export default DashNav;