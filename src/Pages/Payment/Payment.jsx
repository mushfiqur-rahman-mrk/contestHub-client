import { Disclosure } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData, useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";

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
    <div className="w-full h-[40vh]">
      <img src="/src/assets/herobg.png" className="w-full h-full object-cover object-center" alt="" />
    </div>
      <Container>
        <div className="max-w-xl mx-auto my-20">
          <h1 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">{name}</h1>
          <h1 className="text-center">Winner will get $ {prize}</h1>
          <h1 className="mb-8">Registation fee $ {prize}</h1>
          <Elements stripe={stripePromise}>
            <CheckOut price={price} name={name} id={_id} data={data}></CheckOut>
          </Elements>
        </div>
      </Container>
    </>
  );
};

export default Payment;
