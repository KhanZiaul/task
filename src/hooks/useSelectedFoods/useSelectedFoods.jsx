import { useQuery } from "@tanstack/react-query";

function useSelectedFoods() {

    const { data: selectedFoods = [], refetch } = useQuery({
        queryKey: ['selectedFoods'],
        queryFn: async () => {
            const res = await fetch('https://task-server-site.vercel.app/selcetedFoods')
            return res.json()
        }
    })

    return [selectedFoods, refetch]
}
export default useSelectedFoods;