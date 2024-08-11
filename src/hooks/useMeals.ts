import {useQuery} from "@tanstack/react-query"
import axios from "axios"

export interface Tmeal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strInstructions: string;
    strArea: string;
    strTags: string;
    }
export interface Tmeals {
        meals: Tmeal[];
    }

const useMeals = (endPoint:string)=>{
    const getMeals = async()=>{
        const response = axios.get<Tmeals>(`https://www.themealdb.com/api/json/v1/1/${endPoint}`).then((res)=>res.data.meals)
        return response
    }
    return useQuery<Tmeal[], Error>({
        queryKey: ["meals"],
        queryFn: getMeals
    })
}
export default useMeals

export const useMealDetails = (id:string)=>{
    const getDetailsMeal = async()=>{
        const response = axios.get<Tmeals>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>res.data.meals[0])
        return response
    }
    return useQuery<Tmeal, Error>({
        queryKey: ["singleMeal"],
        queryFn: getDetailsMeal
    })
}
