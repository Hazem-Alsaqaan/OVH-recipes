import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../state-management/auth/strore";

const LoginPage = () => {
  const { setCurrentUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleLogin = useGoogleLogin({
    onSuccess: async (user) => {
      if (user) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((currentUser) => {
            setCurrentUser(currentUser.data);
            window.sessionStorage.setItem(
              "saveCurrentUser",
              JSON.stringify(currentUser.data)
            );
            navigate(redirectPath, { replace: true });
          });
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="w-64 h-80 bg-white rounded-md flex flex-col justify-center items-center shadow-xl">
        <FcGoogle className="text-4xl mb-10" />
        <h6 className="text-sm">OpenVoiceHub member</h6>
        <h3 className=" uppercase text-green-500 mb-12 font-semibold text-base">
          login with google
        </h3>
        <button
          onClick={() => handleLogin()}
          className="bg-green-500 text-white px-5 py-1 rounded flex justify-center items-center"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
