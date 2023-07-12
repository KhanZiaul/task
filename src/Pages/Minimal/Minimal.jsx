import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Minimal.css'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useSelectedFoods from "../../hooks/useSelectedFoods/useSelectedFoods";

const Minimal = ({ id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [getError, setError] = useState('')
    const [transactionId, setTransactionId] = useState("");

    const [selectedFoods, refetch] = useSelectedFoods()
    const selectedFood = selectedFoods?.find(sf => sf?._id === id)

    console.log(selectedFood)

    useEffect(() => {
        if (selectedFood?.price > 0) {
            axios.post('https://task-server-site.vercel.app/create-payment-intent', { price: parseFloat(selectedFood?.price * selectedFood?.foodPieces) })
                .then(data => {
                    console.log(data.data)
                    setClientSecret(data.data.clientSecret)
                })
        }

    }, [selectedFood]);

    console.log(clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
        }

        setProcessing(true)

        const { paymentIntent, conFirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'KhanZia',
                        email: 'xyz@gmail.com'
                    },
                },
            },
        );

        if (conFirmError) {
            console.log(conFirmError)
        }

        console.log(paymentIntent)

        setProcessing(false)

        if (paymentIntent.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            const date = new Date();
            const options = { dateStyle: 'full', timeZone: 'UTC' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            const timestamp = date.toISOString();
            console.log(formattedDate, timestamp)
            axios.patch(`https://task-server-site.vercel.app/payment/${selectedFood?._id}`, { payment: "true", date: formattedDate, timestamp: timestamp, TransactionId: paymentIntent.id })
                .then(data => {
                    console.log(data.data)
                    if (data.data.matchedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'payment successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            refetch()
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm bg-sky-500" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

                <p className="text-xl mt-3 text-red-600">{getError}</p>
                <p className="text-xl mt-3 text-green-600">  {transactionId ? `Payment successfully done , transaction id - ${transactionId}` : ' '}</p>
            </form>
        </div>
    );
};

export default Minimal;