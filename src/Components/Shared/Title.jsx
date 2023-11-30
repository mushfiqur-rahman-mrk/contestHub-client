const Title = ({title}) => {
  return (
    <>
      <h1 className="xl:text-4xl text-3xl text-center text-[#0E0E30] font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
        {title}
      </h1>
      <div className="flex justify-center mx-auto ">
        <span className="inline-block w-40 h-1 bg-[#602BF7] rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-[#301b6b] rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-[#B258F5] rounded-full"></span>
      </div>
    </>
  );
};

export default Title;
