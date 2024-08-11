import { create } from "zustand";
import { Tmeal } from "../../hooks/useMeals";

interface TFavorites {
    isFavorite : boolean;
    setIsFavorite : (isFavorite : boolean) => void;
    meals: Tmeal[];
    addToFavorites: (item:Tmeal)=> void;
    removeFavorite: (item: Tmeal)=> void
}


const useFavorites = create<TFavorites>((set)=>({
    isFavorite: false,
    setIsFavorite: (val)=>set({isFavorite: val}),
    meals: [],
    addToFavorites: (item)=> set((state )=> ({meals: state.meals.includes(item) ? state.meals : [...state.meals , item]})),
    removeFavorite: (item)=> set((state)=> ({meals: state.meals.filter((single)=>single.idMeal !== item.idMeal)}))
}))

export default useFavorites