import { FaSearch } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="relative h-[70vh] bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center w-full flex justify-center items-center">
      {/* <div className="absolute top-0 w-full h-screen left-0 z-[-1]">
        <img
          src="/src/assets/herobg.png"
          className="object-cover object-center"
          alt=""
        />
      </div> */}
      <div className="absolute bottom-0 left-0 ">
        <img src="/src/assets/10006.png" alt="" />
      </div>
      <div>
        <h1 className="text-white text-5xl font-bold text-center mb-5">TAKE YOUR CREATIVITY TO <br /> THE NEXT LEVEL</h1>
          <div>
            <form>
              <div className="flex justify-center  items-center">
              <input type="text" placeholder="search"  className="px-5 py-1 rounded-xl"/>
                <button className="bg-red-200" ><FaSearch></FaSearch></button>
              </div>
            </form>
          </div>
        
      </div>
    </div>
  );
};

export default Banner;
