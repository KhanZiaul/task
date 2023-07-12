import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

    const { data } = useQuery({
        queryKey: ['selectedFoods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/paymentDoneFood')
            return res.json()
        }
    })


return (
    <div className="pt-24">
        <div className="overflow-x-auto">
            <table className="table bg-white">
                {/* head */}
                <thead>
                    <tr className="uppercase bg-[#1B6B93] text-white">
                        <th>#</th>
                        <th>Food Name</th>
                        <th>Total Pieces</th>
                        <th>Total Amount</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((paymentsHistory, index) => {
                            return (
                                <tr key={paymentsHistory._id}>
                                    <th>{index + 1}</th>
                                    <td>{paymentsHistory.name}</td>
                                    <td>{paymentsHistory.foodPieces}</td>
                                    <td>$ {parseFloat(paymentsHistory.foodPieces * paymentsHistory.price)}</td>
                                    <td>{paymentsHistory.TransactionId}</td>
                                    <td>{paymentsHistory.date}</td>
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

export default PaymentHistory;