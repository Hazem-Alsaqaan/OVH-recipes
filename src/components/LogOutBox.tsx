import { useNavigate } from "react-router-dom";
import useAuthStore, { TUser } from "../state-management/auth/strore";

const LogOutBox = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuthStore();
  const handleLogOut = () => {
    window.sessionStorage.removeItem("saveCurrentUser");
    setCurrentUser({} as TUser);
    navigate("/login");
  };

  return (
    <div className=" absolute top-full right-1/2 bg-gray-50 px-3 py-6 rounded-md border-2 border-solid border-gray-300 flex flex-col items-center justify-center">
      <h3 className="text-green-500 mb-1 text-xs">
        {currentUser && currentUser.name}
      </h3>
      <h3 className="text-gray-500 text-xs">
        {currentUser && currentUser.email}
      </h3>
      <button
        onClick={() => handleLogOut()}
        className="bg-green-500 text-white text-xs py-1 rounded flex justify-center items-center px-3 mt-4"
      >
        logout
      </button>
    </div>
  );
};

export default LogOutBox;
