import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Minimal from "../Minimal/Minimal";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const { id } = useParams()
    console.log(id,stripePromise)
    return (
        <div className="pt-12 lg:pt-28">
            <Elements stripe={stripePromise}>
                <Minimal id={id}></Minimal>
            </Elements>
        </div>
    );
};

export default Payment;