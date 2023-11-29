import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
    const {logOut,user}=UseAuth()
const handleLogout=()=>{
    console.log('clicked');
    logOut()
    .then(result=>{
      toast.success('Logged out successfully',{position:'top-center',autoClose: 2000,})
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  rounded-full text-sm font-semibold  ">
          {
            user?.photoURL ? <div>
              <img src={user?.photoURL} className="w-10 object-cover object-center rounded-full h-10" alt="" />
            </div>
            :
            <FaUserCircle className="text-4xl "></FaUserCircle>
          }
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <p className="block px-4 py-3 text-sm text-black font-bold">
                 
                {
                    user?.displayName ? user?.displayName : 'No name found'
                }
            </p>
            </Menu.Item>
                <hr />
            <Link to={'/dash-board'}>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900 py-2" : "text-gray-700",
                    "block px-4 py-3 mb-2 text-sm"
                  )}
                >
                  DashBoard
                </p>
              )}
            </Menu.Item>
            </Link>

            <Menu.Item>
              <button onClick={handleLogout} className="bg-blue-300 block w-full px-4 py-2 text-left text-sm">
                sign out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
