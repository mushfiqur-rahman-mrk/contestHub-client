
const DashTitle = ({title}) => {

  return (
    <>
      <div data-aos="zoom-in" data-aos-duration="2000">
          <h1 className="text-4xl font-bold text-center my-5">
            <span className="before:block before:absolute my-4 before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-[#602BF7] to-[#B258F5] relative inline-block">
              <span className="relative text-white">{title}</span>
            </span>
          </h1>
        </div>
    </>
  );
};

export default DashTitle;