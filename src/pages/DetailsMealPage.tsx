import { useParams } from "react-router-dom";
import { useMealDetails } from "../hooks/useMeals";

const DetailsMealPage = () => {
  const { id } = useParams();
  const { data: meal, isLoading } = useMealDetails(`${id}`);
  return (
    <div>
      {isLoading ? (
        <p className="text-green-500">Loading...</p>
      ) : (
        <div className="bg-white p-10 rounded-md shadow-md">
          <div className="flex items-center justify-center rounded-xl overflow-hidden">
            <img
              src={meal?.strMealThumb}
              alt=""
              className="rounded-xl border-2 border-solid border-green-400"
            />
          </div>
          <h2 className="text-green-500 text-2xl font-bold text-center my-4">
            {meal?.strMeal}
          </h2>
          <h2 className="text-gray-500">{meal?.strInstructions}</h2>
          <h2 className="font-semibold text-red-500">
            country: {meal?.strArea}
          </h2>
          <h2 className="font-semibold">category: {meal?.strCategory}</h2>
          <h2 className="font-semibold">types: {meal?.strTags}</h2>
        </div>
      )}
    </div>
  );
};

export default DetailsMealPage;
