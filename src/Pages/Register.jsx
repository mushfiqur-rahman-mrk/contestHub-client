import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import UseAxiosPublic from "../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";

const image_hosting_key= import.meta.env.VITE_IMAGEbb_KEY;
 
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
  const [error, setError] = useState("");
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {createUser,google}=UseAuth()
  const navigate=useNavigate()
  const axiosPublic=UseAxiosPublic()
  const axiosSecure=UseAxiosSecure()
  const {user}=UseAuth()
  console.log(user);
 
  const handleGoogle=()=>{
    console.log('clicked');
    google()
    .then(result=>{
        console.log(result.user);
        const userInfo = {
          email:result.user?.email,
          name:result.user?.displayName,
          image:result.user?.photoURL
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          console.log(res.data);
          navigate('/')
          if (res.data.insertedId) {
            toast.success("Account created successfullyyy",{position:'top-center',autoClose: 1000});
          }
        })

    })
    .catch()

}

const onSubmit = async (data) => {
  console.log(data);
  const imageFile= {image: data.image[0]}
  console.log(imageFile);
  const name=data.name;
  const password=data.password;
  const email=data.email;

    var specialCarrecter= /[!@#$%^&*()_+{}:;<;>,.?=\\|]/;
    if(password.length<6){
      setError('Password must be atleast 6 carrecter or long ')
      return
    }
    else if(!/[A-Z]/.test(password)){
      setError('Password should have atleast one capital letter')
      return
    }
    else if(!specialCarrecter.test(password)){
      setError('Password should have atleast one special carrecter like !@#$%^&*()_+{}:;<;>,.?=\\|')
      return
    }



  const res = await axiosPublic.post(image_hosting_api, imageFile,{
      headers:{
        'content-type': 'multipart/form-data'
      }
    })
    if(res.data.success){
       
       createUser(email,password)
       .then(result=>{
        const image=res?.data?.data.display_url
         updateProfile(result.user,{
           displayName:name,
           photoURL: res?.data?.data.display_url
         })
         axiosPublic.post('/users',{name,email,image})
         .then(res=>{
           console.log(res.data);
           if (res.data.insertedId) {
             toast.success("Account created successfully",{position:'top-center',autoClose: 1000});
           }
         })
         // console.log(result.user);
         navigate('/')
         
    
       })
       .catch(error=>{
         console.log(error.message);
         toast.error(error.message,{position:'top-center',autoClose: 5000});
       })
    }
    console.log(res.data);
};




  return (
    <>
      <div className="w-full h-full">
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTN9eA31YNBdaktwilWaI8Kgcqy0TMZXqfOe2ioUrsNkipdfUnIhv25niv-QWOtx2pC4&usqp=CAU')] bg-cover bg-center flex justify-center items-center h-full py-7">
          <div className="bg-gray-50 bg-opacity-30 p-7 rounded-xl">
            <h1 className="text-center font-semibold text-2xl mb-5">
              Register
            </h1>
            <div className="flex sm:w-96 flex-col gap-6">
              
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
              <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Name*
            </label>
            <input
              type="text"
               
              required
              {...register("name")}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
            />
          </div>
{/* email */}
                <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Email*
            </label>
            <input
              type="email"
               
              required
              {...register("email")}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
            />
          </div>

{/* password */}
                <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Password*
            </label>
            <input
              type="password"
               
              required
              {...register("password")}
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
            />
             
          </div>
                {/* image */}
                <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              
            >
              Profile Image
            </label>
            <input
              className="block w-full text-sm border rounded-md"
              id="file_input"
              type="file"
              required
              {...register("image",{required:true})}
            />
          </div>

                <button className="bg-blue-500 w-full mt-5 p-2 font-semibold text-white">
                  Register
                </button>
                {error && (
                  <p className="bg-red-500 py-1 mt-3 rounded-lg px-3 text-white">
                    {error}
                  </p>
                )}
              </form>

              <h1 className="text-blue-900 text-center font-semibold">
                Already have an account? Go to
                <Link to={"/login"}>
                  <span className="underline ml-2 text-red-800">login</span>
                </Link>{" "}
              </h1>
              <p className="text-center">Or sign up with</p>
             <div onClick={handleGoogle} className="flex justify-center cursor-pointer items-center gap-3 bg-slate-100 px-2 py-2 rounded-lg ">
             <FcGoogle className="text-2xl"></FcGoogle> <p>Continue with Google</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
