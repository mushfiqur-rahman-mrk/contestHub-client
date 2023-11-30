"use client";
import { useState } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { updateProfile } from "firebase/auth";
import UseAuth from "../../../Hooks/useAuth";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGEbb_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const ModalComponent = ({ title, isProfile }) => {
  const [showModalX, setShowModalX] = useState(false);
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    console.log(imageFile);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      console.log(res.data?.data.display_url);
      updateProfile(user, {
        photoURL: res.data?.data.display_url,
      }).then((result) => {
        setShowModalX(!showModalX);
      });
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    const newname = e.target.newname.value;
    const updateUser = {
      name: newname,
      email: user?.email,
    };
    updateProfile(user, {
      displayName: newname,
    })
      .then((result) => {})
      .catch((error) => console.log(error.message));
    axios.patch("https://contest-hub-server-jet.vercel.app/users", updateUser).then((res) => {
      console.log(res.data);
      if (res?.data.modifiedCount > 0) {
        setShowModalX(!showModalX);
        e.target.reset();
        toast("User Name Updated Successfully");
      }
    });
  };

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      <p className="cursor-pointer" onClick={onClickTwo}>
        {title}
      </p>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModalX}
        onClose={onClickTwo}
      >
        {isProfile ? (
          <Modal.Header>Update Your Profile Picture</Modal.Header>
        ) : (
          <Modal.Header>Update Your Name</Modal.Header>
        )}
        <Modal.Body>
          <div className="space-y-6">
            {isProfile ? (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Profile Image
                    </label>
                    <input
                      className="block w-full text-sm border rounded-md"
                      id="file_input"
                      type="file"
                      required
                      {...register("image", { required: true })}
                    />
                  </div>
                  <button className="px-4 py-3 my-2 bg-green-500 rounded-xl text-white">
                    Update
                  </button>
                </form>
              </>
            ) : (
              <>
                <form onSubmit={handleName}>
                  <input
                    className="border mt-4 w-full p-3 rounded-lg "
                    name="newname"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <div className="mt-5">
                    <button
                      onClick={onClickTwo}
                      className="px-4 mr-3 py-3 my-2 bg-green-500 rounded-xl text-white"
                    >
                      Cancle
                    </button>
                    <button className="px-4 py-3 my-2 bg-green-500 rounded-xl text-white">
                      Update
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
