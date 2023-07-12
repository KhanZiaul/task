import { useQuery } from "@tanstack/react-query";

function useSelectedFoods() {

    const { data: selectedFoods = [], refetch } = useQuery({
        queryKey: ['selectedFoods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/selcetedFoods')
            return res.json()
        }
    })

    return [selectedFoods, refetch]
}
export default useSelectedFoods;