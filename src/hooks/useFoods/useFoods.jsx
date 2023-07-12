import { useQuery } from "@tanstack/react-query";

function useFoods(){

    const { data : allFoods = [] , refetch} = useQuery({
        queryKey:['allFoodsCollections'],
        queryFn:async()=>{
            const res = await fetch('https://task-server-site.vercel.app/allFoodCollections')
            return res.json()
        }
    })
    
    return [allFoods,refetch]
}
export default useFoods;