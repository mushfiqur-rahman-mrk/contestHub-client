import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const EditContest = () => {
    const contest=useLoaderData()
 
    const {_id,name,type,price,prize,instructions,deadline,description,participation,CreatorName,CreatorEmail,status,image}=contest || {}
    const {user}=UseAuth()
    const { register,formState: { errors }, handleSubmit } = useForm();
    const axiosPublic=UseAxiosPublic()
    const axiosSecure=UseAxiosSecure()


    const onSubmit = async (data) => {
        console.log(data);
        const updatedContest={
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
          image: data.image
        }
        const menures= await axiosSecure.put(`/pendingContest/update/${_id}`, updatedContest)
        console.log(menures.data);
        if(menures.data.modifiedCount){
          toast.success(`${data?.name} updated successfully`)
        }




      };


 
  return (
    <>
      <div className="mx-5 my-10 space-y-2">
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
              defaultValue={name}
              {...register("name")}
              placeholder="Recipe Name"
              className="border w-full rounded-md p-1 outline-orange-400"
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
              defaultValue={prize}
              {...register("prize")}
              placeholder="Recipe Name"
              className="border w-full rounded-md p-1 outline-orange-400"
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
            defaultValue={instructions}
            {...register("instructions")}
            className="block p-2.5 w-full text-sm  border rounded-md"
            placeholder="Write your thoughts here..."
          ></textarea>
          </div>

          <div className="mb-4">
            <label
               
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Contest Deadline*
            </label>
            <input
              type="date"
              id="default-input"
              defaultValue={deadline}
              {...register("deadline")}
              placeholder="Recipe Name"
              className="border w-full rounded-md p-1 outline-orange-400"
            />
             
          </div>
          
          <div className="grid grid-cols-2 gap-3 justify-center  ">
            {/* select type */}
            <div>
              <label
                 
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Choose Contest Type*
              </label>
              <select
                defaultValue={type}
                {...register("type",{required:true})}
                aria-invalid={errors.category ? "true" : "false"}
                id="small"
                
                className="border w-full rounded-md p-1 outline-orange-400"
              >
                <option disabled>
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
                defaultValue={price}
                {...register("price")}
                placeholder="price"
                className="border w-full rounded-md p-1 outline-orange-400"
              />
            </div>
          </div>

          <label   className="block mb-2 text-sm font-medium text-gray-700 ">
            Contest Details*
          </label>

          <textarea
            id="message"
            rows="4"
            defaultValue={description}
            {...register("description")}
            className="block p-2.5 w-full text-sm  border rounded-md"
            placeholder="Write your thoughts here..."
          ></textarea>
          <div className="my-5">
          <label
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Current Image
            </label>
            <img src={image} className="w-20 h-20 object-cover object-center" alt="" />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Update Image URL
            </label>
            <input
              className="block w-full text-sm border rounded-md"
              id="file_input"
              type="url"
              placeholder="Your Image URL here"
              defaultValue={image}
              {...register("image",{required:true})}
              // {...register("image")}
              // aria-invalid={errors.image ? "true" : "false"}
            />
            {/* {errors.image ?.type === "required" && (
                     <p role="alert" className="text-red-500">First name is required</p>
                 )} */}
          </div>

           

          <button className="px-3 py-2 bg-blue-700 flex justify-center items-center gap-3 rounded-lg mt-4 text-white">Update Contest</button>
        </form>
      </div>
    </>
  );
};

export default EditContest;