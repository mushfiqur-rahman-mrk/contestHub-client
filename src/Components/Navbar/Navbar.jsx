import { Link, NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import DropDown from "../DropBtn/DropDown";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { logOut, user } = UseAuth();
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "All Contest",
      path: "/all-contest",
    },
  ];

  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logged out successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // console.log(currentScrollPos);
      if (currentScrollPos > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Set a threshold value based on your design
      const scrollThreshold = 250;

      // Calculate the difference between the current and previous scroll position
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Check if the user has scrolled past the threshold
      const isScrolledPastThreshold = currentScrollPos > scrollThreshold;
      // Determine if the navbar should be visible based on scrolling direction and position
      setVisible(!isScrollingDown || !isScrolledPastThreshold);

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`fixed z-10 top-0 w-full transition-all duration-300 
        
      ${scrolled ? "bg-gradient-to-r from-[#341786] to-[#0E0E30]" : "bg-black bg-opacity-30 "}   `}
      >
       
          {/* Your navbar content goes here */}
         <div className="max-w-6xl mx-auto p-4">
         <div className="text-white flex justify-between items-center">
            <div>
              <img src="/src/assets/logo.png" className="h-10 w-40 md:w-full" alt="" />
            </div>
            <div className="hidden sm:block">
            <div className="flex justify-center items-center ">
              {navLinks?.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    isActive
                      ? "px-5 text-[#EEFF25] font-semibold"
                      : "px-5 text-white font-semibold"
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
            </div>
            <div className="flex justify-center items-center gap-4">
            {user ? (
              <>
                <DropDown></DropDown>
              </>
            ) : (
              <Link to={"/login"}>
                <button className="font-semibold mx-4">Log in</button>
              </Link>
            )}
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            {open === true ? (
              <FaTimes className="dark:text-white"></FaTimes>
            ) : (
              <FaBars className="dark:text-white"></FaBars>
            )}
          </div>
            </div>

            
          </div>
         </div>
      </nav>

      <div className=" w-96 text-center">
        <div
          className={`bg-gradient-to-r from-[#602BF7] to-[#B258F5] z-30 space-y-4 pt-5 absolute w-64 h-full ${
            open ? "top-20 right-0 transition-all duration-100" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-3 justify-center items-center">
              {navLinks?.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    isActive
                      ? "px-5 text-[#EEFF25] font-semibold"
                      : "px-5 text-white font-semibold"
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
