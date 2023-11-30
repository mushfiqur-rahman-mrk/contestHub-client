import { Disclosure } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData, useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import art from '/src/assets/10009.png'


const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_KEY);
const Payment = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const axiosPublic = UseAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/contest/${id}`).then((res) => setData(res?.data));
  }, []);
  const { price,prize, name, _id, deadline, participation } = data || {};

  return (
    <>
      <div className="bg-gradient-to-r from-[#341786] to-[#0E0E30] w-full h-60 mb-5 relative">
        <div className="absolute bottom-0 right-0 mb-[-10px]"><img src={art} alt="" /></div>
      </div>
      <Container>
        <div className="max-w-xl mx-auto my-20 px-10">
          <h1 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center text-[#341786] font-bold">{name}</h1>
          <h1 className="text-center font-semibold mb-10">Winner will get $ {prize}</h1>
          <h1 className="mb-8 font-light text-purple-500 text-xl">Registation fee: $ {price}</h1>
          <Elements stripe={stripePromise}>
            <CheckOut price={price} name={name} id={_id} data={data}></CheckOut>
          </Elements>
        </div>
      </Container>
    </>
  );
};

export default Payment;
