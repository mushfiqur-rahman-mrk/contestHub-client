import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckOut = ({price,name,data}) => {
    const stripe = useStripe();
    // console.log(stripe);
    const navigate=useNavigate()
    const [showError,setShowError]=useState('')
    const [clientSecret,setClientSecret]=useState('')
    const [transactionId,setTransactionId]=useState('')
    const elements = useElements();
    const axiosSecure=UseAxiosSecure()
    const {user}=UseAuth()
    const newparticipation=data?.participation + 1;
    console.log(newparticipation,data?.participation);
 
    useEffect(()=>{
        if(price > 0){
          axiosSecure.post('/create-payment-intent', {price: price})
          .then(res=>{
            console.log(res?.data.clientSecret);
            setClientSecret(res?.data.clientSecret)
          })
        }
      },[axiosSecure,price])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
          return;
        }
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('[error]', error);
            setShowError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setShowError('')
          }
    
          // confirm payment
          const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
              card: card,
              billing_details:{
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
              }
            }
          })
    
          if(confirmError){
            console.log('confirm error',confirmError);
          }
          else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === "succeeded"){
              console.log('transiction id', paymentIntent.id);
              setTransactionId(paymentIntent.id)
              // save the payment to the data base
              const payment= {
                email: user?.email,
                name:user?.displayName,
                price: price,
                transactionId: paymentIntent.id,
                deadline: data.deadline, // utc date convert
                ConName: name,
                type:data.type,
                creatorEmail:data?.CreatorEmail,
                contestId:data?._id,
              }
              const countres= axiosSecure.patch(`/contest/${data._id}`,{newparticipation})
              const res = await axiosSecure.post('/payment', payment);
              console.log(res.data);
              if(res?.data.insertedId){
                
                toast.success('Thanks for your payment')
                navigate('/all-contest')
              }
            }
          }
      };

  return (
    <>
       <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="px-6  rounded-lg text-white py-1 bg-orange-500 mt-5" type="submit" disabled={!stripe}>
          Pay
        </button>
        {
            showError ? <p className="text-red-600 mt-2 font-semibold">{showError}</p>
            :
            ''
        }
        {
          transactionId && <p className="text-green-600 text-lg font-semibold"> Your transiction id : {transactionId}</p>
        }
      </form>
      </div>
    </>
  );
};

export default CheckOut;