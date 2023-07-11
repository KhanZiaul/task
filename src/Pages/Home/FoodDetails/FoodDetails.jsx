import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";

const FoodDetails = () => {

    const { id } = useParams()
    const { data } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/food/${id}`)
            return data.json()
        }
    })

    function formHandler() {
        // e.preventDefault()
        // const size = e.target.size.value;
        // const productPiece = e.target.productPiece.value;
        // const selectedProduct = {
        //     productId: data?._id,
        //     brand: data?.brand,
        //     size: size,
        //     productPiece: parseInt(productPiece),
        //     ratings: data?.ratings,
        //     price: data?.price,
        //     img: data?.img,
        //     type: data?.type,
        //     productName: data?.productName,
        //     productDetails: data?.productDetails,
        //     isApproved: data?.isApproved,
        //     payment: "false"
        // }
        // console.log(selectedProduct)
        // axiosSecure.post('/secetedProduct', selectedProduct)
        //     .then(data => {
        //         console.log(data.data)
        //         if (data.data.acknowledged === true) {
        //             Swal.fire(
        //                 'Successfull!',
        //                 'you selected product successfully',
        //                 'success'
        //             )
        //         }
        //     })

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
                            <input className="border-2 rounded-md w-20 max-w-xs p-2 border-sky-700" defaultValue={1} min='1' type="number" name="productPiece" id="" />
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