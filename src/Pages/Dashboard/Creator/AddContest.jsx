// import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa";
 
// import { toast } from "react-toastify";
// import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
// import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
// import UseAuth from "../../../Hooks/useAuth";
// import { useState } from "react";

// const image_hosting_key= import.meta.env.VITE_IMAGEbb_KEY;
// console.log(image_hosting_key);
// const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

// const AddContest = () => {
//   const {user}=UseAuth()
//   const [showError,setShowError]=useState('')
//   const { register,formState: { errors }, handleSubmit } = useForm();
//   const axiosPublic=UseAxiosPublic()
//   const axiosSecure=UseAxiosSecure()
  

//   const onSubmit = async (data) => {
//     // console.log(data);
//     //uplode image to imagebb and get link
//     const imageFile= {image: data.image[0]}
//     // console.log(imageFile);
    
//     if(new Date() >= new Date(data.deadline)){
//       return setShowError('error date formate')
//     }
//     // console.log(new Date());
//     // console.log('dead',new Date(data.deadline));
     
 
//     const res = await axiosPublic.post(image_hosting_api, imageFile,{
//       headers:{
//         'content-type': 'multipart/form-data'
//       }
//     })
//     if(res.data.success){
//       // now send the data to mongodb
//       const contestInfo={
//         name: data.name,
//         type: data.type,
//         price: parseFloat(data.price),
//         prize: parseFloat(data.prize),
//         instructions:data.instructions,
//         deadline:data.deadline,
//         description:data.description,
//         participation:0,
//         CreatorName:user?.displayName, 
//         CreatorEmail:user?.email,
//         image: res?.data?.data.display_url
//       }
 
//       // console.log(res.data.display_url);
//       // console.log(contestInfo);
//       const menures= await axiosSecure.post('/contest', contestInfo)
//       console.log(menures.data);
//       if(menures.data.insertedId){
//         toast.success(`${data?.name} added success fully`)
//       }
//     }
//     console.log(res.data);
//   };

//   return (
//     <>
//       <div className="mx-5 my-10 space-y-2">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Contest name */}
//           <div className="mb-4">
//             <label
               
//               className="block mb-2 text-sm font-medium text-gray-700 "
//             >
//               Contest Name*
//             </label>
//             <input
//               type="text"
//               id="default-input"
//               required
//               {...register("name")}
//               placeholder="Recipe Name"
//               className="border w-full rounded-md p-1 outline-orange-400"
//             />
//           </div>
//           {/* contest prize */}
//           <div className="mb-4">
//             <label
               
//               className="block mb-2 text-sm font-medium text-gray-700 "
//             >
//               Contest prize*
//             </label>
//             <input
//               type="number"
//               step='0.01'
//               id="default-input"
//               required
//               {...register("prize")}
//               placeholder="Recipe Name"
//               className="border w-full rounded-md p-1 outline-orange-400"
//             />
//           </div>

//           <div className="mb-4">
//             <label
               
//               className="block mb-2 text-sm font-medium text-gray-700 "
//             >
//               Submission Instructions*
//             </label>
//             <textarea
//             id="message"
//             rows="2"
//             required
//             {...register("instructions")}
//             className="block p-2.5 w-full text-sm  border rounded-md"
//             placeholder="Write your thoughts here..."
//           ></textarea>
//           </div>

//           <div className="mb-4">
//             <label
               
//               className="block mb-2 text-sm font-medium text-gray-700 "
//             >
//               Contest Deadline*
//             </label>
//             <input
//               type="date"
//               id="default-input"
//               required
//               {...register("deadline")}
//               placeholder="Recipe Name"
//               className="border w-full rounded-md p-1 outline-orange-400"
//             />
//             {
//               showError ? <p className="text-red-800">{showError}</p>
//               :
//               setShowError('')
//             }
//           </div>
          
//           <div className="grid grid-cols-2 gap-3 justify-center  ">
//             {/* select type */}
//             <div>
//               <label
                 
//                 className="block mb-2 text-sm font-medium text-gray-700 "
//               >
//                 Choose Contest Type*
//               </label>
//               <select
//                 defaultValue={'default'}
//                 {...register("type",{required:true})}
//                 aria-invalid={errors.category ? "true" : "false"}
//                 id="small"
                
//                 className="border w-full rounded-md p-1 outline-orange-400"
//               >
//                 <option disabled value={'default'}>
//                   Choose a contest type
//                 </option>
//                 <option value="business">Business Contest</option>
//                 <option value="Article">Article Writting</option>
//                 <option value="gaming">Gaming Contest</option>
//                 <option value="medical">Medical Contest</option>
                 
//               </select>
//               {errors.category?.type === "required" && (
//                   <p role="alert">First name is required</p>
//                 )}
//             </div>
//             {/* price */}
//             <div className="mb-4">
//               <label
                 
//                 className="block mb-2 text-sm font-medium text-gray-700 "
//               >
//                Contest Price*
//               </label>
//               <input
//                 type="number"
//                 step='0.01'
//                 id="default-input"
//                 required
//                 {...register("price")}
//                 placeholder="price"
//                 className="border w-full rounded-md p-1 outline-orange-400"
//               />
//             </div>
//           </div>

//           <label   className="block mb-2 text-sm font-medium text-gray-700 ">
//             Contest Details*
//           </label>

//           <textarea
//             id="message"
//             rows="4"
//             required
//             {...register("description")}
//             className="block p-2.5 w-full text-sm  border rounded-md"
//             placeholder="Write your thoughts here..."
//           ></textarea>

//           <div>
//             <label
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              
//             >
//               Contest Image
//             </label>
//             <input
//               className="block w-full text-sm border rounded-md"
//               id="file_input"
//               type="file"
//               {...register("image",{required:true})}
//             />
//           </div>

           

//           <button className="px-3 py-2 bg-orange-500 flex justify-center items-center gap-3 rounded-lg mt-4 text-white"> Add item <FaUtensils></FaUtensils></button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddContest;

import { useForm } from "react-hook-form";
 
import { toast } from "react-toastify";
import UseAuth from "../../../Hooks/useAuth";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import DashTitle from "../../../Components/Shared/DashTitle";



const image_hosting_key= import.meta.env.VITE_IMAGEbb_KEY;
 
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddContest = () => {
    const {user}=UseAuth()
    const { register,formState: { errors }, handleSubmit } = useForm();
    const axiosPublic=UseAxiosPublic()
    const axiosSecure=UseAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile= {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
          'content-type': 'multipart/form-data'
        }
      })
      if(res.data.success){
        // now send the data to mongodb
        const contestInfo={
          name: data.name,
          type: data.type,
          price: parseFloat(data.price),
          prize: parseFloat(data.prize),
          instructions:data.instructions,
          deadline:data.deadline,
          description:data.description,
          participation:0,
          CreatorName:user?.displayName, 
          CreatorEmail:user?.email,
          status: 'pending',
          image: res?.data?.data.display_url
        }
   
        // console.log(res.data.display_url);
        // console.log(contestInfo);
        const menures= await axiosSecure.post('/pendingContest', contestInfo)
        console.log(menures.data);
        if(menures.data.insertedId){
          toast.success(`${data?.name} added success fully`)
        }
      }
      console.log(res.data);
  };
  return (
    <>
    <DashTitle title={'Add New Contest'}></DashTitle>
      <div className="mx-5 my-10 space-y-2 px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
          {/* Contest name */}
          <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Contest Name*
            </label>
            <input
              type="text"
              id="default-input"
              required
              {...register("name")}
              placeholder="Contest Name"
              className="border w-full rounded-md p-1 outline-[#602BF7]"
            />
          </div>
          {/* contest prize */}
          <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Contest prize*
            </label>
            <input
              type="number"
              step='0.01'
              id="default-input"
              required
              {...register("prize")}
              placeholder="Contest Name"
              className="border w-full rounded-md p-1 outline-[#602BF7]"
            />
          </div>

          <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Submission Instructions*
            </label>
            <textarea
            id="message"
            rows="2"
            required
            {...register("instructions")}
            className="block p-2.5 w-full text-sm  border rounded-md outline-[#602BF7]"
            placeholder="Write your thoughts here..."
          ></textarea>
          </div>

           
          
           {/* select type */}
           <div className="mb-5">
              <label
                 
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Choose Contest Type*
              </label>
              <select
                defaultValue={'default'}
                {...register("type",{required:true})}
                aria-invalid={errors.category ? "true" : "false"}
                id="small"
                
                className="border w-full rounded-md p-1 outline-[#602BF7]"
              >
                <option disabled value={'default'}>
                  Choose a contest type
                </option>
                <option value="business">Business Contest</option>
                <option value="Article">Article Writting</option>
                <option value="gaming">Gaming Contest</option>
                <option value="medical">Medical Contest</option>
                 
              </select>
              {errors.category?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
            </div>
          
          <div className="grid grid-cols-2 gap-3 justify-center  ">
          <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Contest Deadline*
            </label>
            <input
              type="date"
              id="default-input"
              required
              {...register("deadline")}
              placeholder="Recipe Name"
              className="border w-full rounded-md p-1 outline-[#602BF7]"
            />
             
          </div>
            {/* price */}
            <div className="mb-4">
              <label
                 
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
               Contest Price*
              </label>
              <input
                type="number"
                step='0.01'
                id="default-input"
                required
                {...register("price")}
                placeholder="price"
                className="border w-full rounded-md p-1 outline-[#602BF7]"
              />
            </div>
          </div>

          <label   className="block mb-2 text-sm font-medium text-gray-700 ">
            Contest Details*
          </label>

          <textarea
            id="message"
            rows="4"
            required
            {...register("description")}
            className="block p-2.5 w-full text-sm  border rounded-md outline-[#602BF7]"
            placeholder="Write your thoughts here..."
          ></textarea>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              
            >
              Contest Image
            </label>
            <input
              className="block w-full text-sm border rounded-md outline-[#602BF7]"
              id="file_input"
              type="file"
              {...register("image",{required:true})}
            />
          </div>

           

          <button className="px-10 py-3  bg-gradient-to-r from-[#602BF7] to-[#B258F5] flex justify-center items-center gap-3 rounded-lg mt-10 text-white"> Add item</button>
        </form>
      </div>
    </>
  );
};

export default AddContest;