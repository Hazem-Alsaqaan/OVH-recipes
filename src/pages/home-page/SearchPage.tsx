import BoxMeal from "../../components/BoxMeal";
import useMeals from "../../hooks/useMeals";
import useSearch from "../../state-management/meals/store";

const SearchPage = () => {
  const { searchQuery } = useSearch();
  const { data: meals } = useMeals(`search.php?s=${searchQuery}`);
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
      {meals?.map((meal) => (
        <BoxMeal key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default SearchPage;
