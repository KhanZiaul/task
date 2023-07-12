import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FoodDetails = () => {

    const { id } = useParams()
    const { data } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const data = await fetch(`https://task-server-site.vercel.app/food/${id}`)
            return data.json()
        }
    })

    function formHandler(e) {
        e.preventDefault()
        const foodPieces = e.target.foodPieces.value;
        const selectedfood = {
            productId: data?._id,
            foodPieces: parseInt(foodPieces),
            price: data?.price,
            image: data?.image,
            name: data?.name,
            description: data?.description,
            estimateTime:data?.estimateTime,
            payment: "false"
        }
        console.log(selectedfood)
        axios.post('https://task-server-site.vercel.app/secetedFood', selectedfood)
            .then(data => {
                console.log(data.data)
                if (data.data.acknowledged === true) {
                    Swal.fire(
                        'Successfull!',
                        'you select food successfully',
                        'success'
                    )
                }
            })

    }

    return (
        <div className="pt-28 flex flex-col lg:flex-row items-center gap-10 mb-10 w-[95%] mx-auto">
            <div>
                <img className="rounded-xl w-full lg:w-[800px] lg:h-[500px]" src={data?.image} alt="" />
            </div>
            <div className="space-y-6">
                <p className="text-xl font-bold">Food Name : {data?.name}</p>
                <p className="text-3xl font-bold">Price : ${data?.price}</p>
                <form className="space-y-4" onSubmit={formHandler}>
                    <div className="grid grid-cols-1 gap-5">
                        <div className="flex flex-col lg:flex-row gap-5 items-center">
                            <p className="font-bold text-xl">Total pieces : </p>
                            <input className="border-2 rounded-md w-20 max-w-xs p-2 border-sky-700" defaultValue={1} min='1' type="number" name="foodPieces" id="" />
                        </div>
                        <button className="rounded-md bg-sky-700 text-white font-semibold count px-5 py-3">Add To Cart</button>
                    </div>
                </form>
                <p className="text-2xl font-bold">Food Details</p>
                <p className="text-justify">{data?.description}</p>
            </div>
        </div>
    );
};

export default FoodDetails;