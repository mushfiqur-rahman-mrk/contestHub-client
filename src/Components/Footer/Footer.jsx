import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import DLDisable from "../Test/DLDisable";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-500 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-5">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex"
                type="button"
              >
                 
                <FaTwitter />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex "
                type="button"
              >
                 
                 
                <FaFacebookF></FaFacebookF>
              </button>
 
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                 
                <FaInstagram></FaInstagram>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    About Us
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Blog
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    GitHub
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Free Products
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Terms &amp; Conditions
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Privecy Policy
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="p-4 bg-gray-600  text-white">
          <aside>
            <p className="text-center">
              Copyright © 2023 - All right reserved by ACME Industries Ltd
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
