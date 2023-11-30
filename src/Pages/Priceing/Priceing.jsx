import Title from '../../Components/Shared/Title';
import art from '/src/assets/10009.png'
const Priceing = () => {

  return (
    <>
          <div className="bg-gradient-to-r from-[#341786] to-[#0E0E30] w-full h-60 mb-5 relative">
        <div className="absolute bottom-0 right-0 mb-[-10px]"><img src={art} alt="" /></div>
      </div>
      <Title title={'Pricing'}></Title>
      <p className='text-lg text-center md:px-20 px-5 my-5'>Unlock the thrill of competitions! Choose from flexible pricing plans, featuring contests, participant management, and engaging features for success.</p>
       <div className="bg-white mb-20">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4  dark:border-purple-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-purple-500 uppercase rounded-lg bg-gray-300 ">
                  For Users
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $19.90
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500 dark:text-gray-400">
                Unlimited contest submissions.
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                Ad-free experience.
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                Access to advanced platform features.
                </li>
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none">
                Start free
              </button>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4  dark:border-purple-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-purple-500 uppercase rounded-lg bg-gray-300">
                  For Creators
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $34.90
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500 dark:text-gray-400">
                  Up to 20 contest creation per month
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                Access to advanced platform features.
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                   24/7 customer support
                </li>
 
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-purple-600 rounded-lg hover:bg-purple-800 focus:outline-none">
                Start free trial
              </button>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:border-purple-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-300">
                  for creators
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase ">
                  $49.90
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500 dark:text-gray-400">
                Unlimited contest submissions.
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                  Unlimited collaborators
                </li>
 
                <li className="text-gray-500 dark:text-gray-400">
                  Real-time collaborations
                </li>
                <li className="text-gray-500 dark:text-gray-400">
                  24x7 Support
                </li>
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-purple-600 rounded-lg hover:bg-purple-800  focus:outline-none">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Priceing;