import { useQuery } from "@tanstack/react-query";

function useFoods(){

    const { data : allFoods = [] , refetch} = useQuery({
        queryKey:['allFoodsCollections'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/allFoodCollections')
            return res.json()
        }
    })
    
    return [allFoods,refetch]
}
export default useFoods;