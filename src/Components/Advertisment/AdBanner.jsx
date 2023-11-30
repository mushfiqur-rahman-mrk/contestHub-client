import adimage from '/src/assets/ad.jpg'

const AdBanner = () => {
  return (
    <>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full lg:w-1/2 lg:h-auto">
    
          <img
            className="h-full w-full object-cover object-center"
            src={adimage}
            alt="Winding mountain road"
          />
        </div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-0 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
             
            <h1 className="text-lg uppercase text-[#1e133b] font-extrabold ">
             Register <br></br>Today and get
      </h1>
            {/* <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              Winding Mountain Road
            </h2> */}
            <h1 className=" uppercase text-8xl text-[#602BF7] font-extrabold ">
        50% <span className="text-lg ml-[-25px] text-[#35164d]">off</span>
      </h1>
            <p className="mt-4">
            Experience the thrill of intense battles and strategic gameplay in our Epic Battle Royale contest. Dive into a virtual world where every move counts, and only the strongest will survive. With a total prize pool of $200
            </p>

            <div className="mt-4">
            <button className="bg-gradient-to-r from-[#602BF7] to-[#B258F5]   py-2 px-4  text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Show Detail
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBanner;
