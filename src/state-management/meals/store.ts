import { create } from "zustand";

interface TSearchQuery {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}
const useSearch =  create<TSearchQuery>((set)=>({
    searchQuery: "",
    setSearchQuery: (query) => set({searchQuery: query})
}))
export default useSearch;
