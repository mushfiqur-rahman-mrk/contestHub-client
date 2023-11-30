import { BsCalendarEvent, BsHouse } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import UseAdmin from "../../Hooks/useAdmin";
import UseCreator from "../../Hooks/useCreator";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const DashNav = () => {
  const {isAdmin}=UseAdmin()
  const [open, setOpen] = useState(false);
  
  const {isCreator}=UseCreator()
  
    const navLinks = [
        {
          id: 1,
          text: 'Home',
          path: '/dash-board',
        },
        {
          id: 2,
          text: 'Winning Contest',
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
      text: 'Winning Contest',
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
    
    <div className="relative">
      
      <div className="md:hidden text-xl absolute top-2  right-0" onClick={() => setOpen(!open)}>
            {open === true ? (
              <FaTimes className="text-black sticky"></FaTimes>
            ) : (
              <FaBars className="text-black sticky"></FaBars>
            )}
      </div>
      {/* desktop nav */}
      <div className="hidden md:block">
      <div className="flex flex-col items-center gap-5 my-10 px-2">
        <img src="/src/assets/logo.png" className="w-48 mb-8" alt="" />
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
      </div>
    </div>
    {/* mobile dash nav */}
    <div className="w-20">
    
    <div className={`bg-gradient-to-r bg-blue-500 z-30 space-y-4 pt-5 absolute w-64 h-full ${
            open ? "top-0 left-0 transition-all duration-100" : "hidden"
          }`}>
      <div onClick={() => setOpen(!open)} className="absolute top-2 right-5">
      <FaTimes className="dark:text-white text-xl"></FaTimes>
      </div>
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
      </div>
    </div>
    </>
  );
};

export default DashNav;