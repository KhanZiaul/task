import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedFoods from "../../hooks/useSelectedFoods/useSelectedFoods";

const OrderSummary = () => {

    const [selectedFoods, refetch] = useSelectedFoods()
    function deleteProduct(id) {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://task-server-site.vercel.app/deleteFood/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                        console.log(data.data)
                    })
            }
        })
    }

    return (
        <div className="pt-12 lg:pt-28">
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#1B6B93] text-white">
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Total Pieces</th>
                            <th>Total Price</th>
                            <th>Estimate Time</th>
                            <th>pay</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedFoods?.map((selectedFood, index) => {
                                return (
                                    <tr key={selectedFood._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectedFood?.image} alt="product image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{selectedFood?.name}</td>
                                        <td>{selectedFood?.foodPieces}</td>
                                        <td>$ {parseFloat(selectedFood?.price * selectedFood?.foodPieces).toFixed(2)}</td>

                                        <td>{selectedFood?.estimateTime}</td>
                                        <td>
                                            <Link to={`/payment/${selectedFood?._id}`}>
                                                <button className="bg-[#4941eb] hover:bg-[#2c22e6] btn-sm text-white rounded-md">PAY</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteProduct(selectedFood._id)} className="bg-[#e71c6a] hover:bg-[#c70a7b] btn-sm text-white rounded-md">DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderSummary;