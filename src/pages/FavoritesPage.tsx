import BoxMeal from "../components/BoxMeal";
import useFavorites from "../state-management/meals/useFavoritesStore";

const FavoritesPage = () => {
  const { meals } = useFavorites();
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
      {meals.length > 0 ? (
        meals?.map((meal) => <BoxMeal key={meal.idMeal} meal={meal} />)
      ) : (
        <p className="text-red-500">no favorites found...</p>
      )}
    </div>
  );
};

export default FavoritesPage;
