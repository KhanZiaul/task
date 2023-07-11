import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import useFoods from '../../../hooks/useFoods/useFoods';

const Foods = () => {

    const [allFoods] = useFoods()

    return (
        <div>
            <div className="text-center space-y-3 mt-16 mb-10">
                <h2 className="text-6xl font-semibold">Our Foods</h2>
                <p className="text-xl">Hurry up ! enjoy our foods </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] my-8 gap-8">
                {
                    allFoods?.map(food => {
                        return (
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="border-2 p-5 space-y-6 rounded-2xl shadow-2xl" key={food._id}>

                                <img className="w-full lg:h-80 mx-auto rounded-2xl" src={food.image} alt="" />
                                <p className="font-bold text-gray-600">{food.name}</p>

                                <div className="flex justify-between">
                                    <p className="text-xl font-bold text-[#1B6B93]">${food.price}</p>
                                    <Link to={`/foodDetails/${food._id}`}>
                                        <BsCart2 className="text-[#1B6B93] bg-gray-200 rounded-full p-2 w-12 h-12 cursor-pointer"></BsCart2>
                                    </Link>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Foods;