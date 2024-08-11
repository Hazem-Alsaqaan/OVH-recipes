import { useLocation, useNavigate } from "react-router-dom";
import { Tmeal } from "../hooks/useMeals";
import { MdAddToPhotos } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import useFavorites from "../state-management/meals/useFavoritesStore";

interface Props {
  meal: Tmeal;
}

const BoxMeal = ({ meal }: Props) => {
  const location = useLocation();
  const { addToFavorites, removeFavorite } = useFavorites();
  const navigate = useNavigate();
  const detailsMealHandler = () => {
    navigate(`/details/${meal.idMeal}`);
  };
  return (
    <div className="bg-white rounded-md flex items-center p-2 overflow-hidden shadow-lg">
      <div className=" w-24 h-24 border-2 border-solid border-green-300 rounded-full overflow-hidden">
        <img src={meal?.strMealThumb} className="w-full h-full" alt="" />
      </div>
      <div className="flex-1 p-3 bg-white flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-600">{meal.strMeal}</p>
          {location.pathname === "/favorites" ? (
            <CiCircleRemove
              className="text-2xl text-green-500 cursor-pointer"
              onClick={() => removeFavorite(meal)}
            />
          ) : (
            <MdAddToPhotos
              className="text-2xl text-green-500 cursor-pointer"
              onClick={() => addToFavorites(meal)}
            />
          )}
        </div>
        <p className="text-sm text-gray-600">
          country:<span className="text-yellow-500 ml-1">{meal.strArea}</span>
        </p>
        <p className="text-sm text-gray-600">
          Tags:
          <span className="text-red-500 ml-1">
            {meal.strTags ? meal.strTags : "no tags"}
          </span>
        </p>
        <button
          onClick={() => detailsMealHandler()}
          className="bg-green-500 px-2 py-0.5 mt-1 text-sm rounded-md text-white max-w-52"
        >
          details
        </button>
      </div>
    </div>
  );
};

export default BoxMeal;
