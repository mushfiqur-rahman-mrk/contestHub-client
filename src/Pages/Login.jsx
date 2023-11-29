import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const {logIn}=UseAuth()
  const navigate=useNavigate()
  const location=useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email=e.target.email.value
    const password=e.target.password.value
     
    logIn(email,password)
    .then(result=>{
     console.log(result.user);
     toast.success("Loged in successfully",{
       position:'top-center',
       autoClose: 1000,
     })
     navigate(location?.state ? location.state : "/");
    })
    .catch(error=>{
     console.log(error.messege);
     toast.error(error.message,{
       position:'top-center',
       autoClose: 1000,
     })
    })
  };
  return (
    <>
      <div className="w-full h-screen">
        {/* <div>
            <img src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg" alt="" />
        </div> */}
        <div className="bg-[url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg')] bg-cover bg-center flex justify-center items-center h-screen">
          <div className="bg-gray-50 bg-opacity-30 p-7 rounded-xl">
            <h1 className="text-center font-semibold text-2xl mb-5">Log in</h1>
            <div className="flex w-72 flex-col gap-6">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className=" ">
                <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <button className="bg-blue-500 w-full mt-5 p-2 font-semibold text-white">
                  Log in
                </button>
              </form>

              <h1 className="text-blue-900 text-center font-semibold">
                Don't have an account? Go to
                <Link to={"/register"}>
                  <span className="underline ml-2 text-red-800">Sign up</span>
                </Link>{" "}
              </h1>
              <p className="text-center">Or sign up with</p>
              <div className="flex justify-center items-center gap-3 bg-slate-100 px-2 py-2 rounded-lg ">
             <FcGoogle className="text-2xl"></FcGoogle> <p>Continue with Google</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
