import { useNavigate } from "react-router-dom";
import useAuthStore from "../state-management/auth/strore";
import LogoApp from "./LogoApp";
import NavLinks from "./NavLinks";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthStore();

  return (
    <div className=" fixed w-screen px-8 max-sm:px-2 h-36 bg-gray-50 flex items-center shadow-sm max-sm:flex-wrap max-sm:justify-center border-b-2 border-solid border-b-gray-200 z-50">
      <LogoApp />
      <NavLinks />
      <SearchForm />
      {currentUser ? (
        <Profile />
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 text-white px-3 py-1 rounded flex justify-center items-center mx-2 text-sm"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default NavBar;
