import BoxMeal from "../../components/BoxMeal";
import useMeals from "../../hooks/useMeals";

const IndexPage = () => {
  const { data: meals, isLoading } = useMeals("search.php?s=");
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
      {isLoading ? (
        <p className="text-green-500">Loading...</p>
      ) : (
        meals?.map((meal) => <BoxMeal key={meal.idMeal} meal={meal} />)
      )}
    </div>
  );
};

export default IndexPage;
