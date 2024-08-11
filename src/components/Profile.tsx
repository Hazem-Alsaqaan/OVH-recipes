import { useState } from "react";
import LogOutBox from "./LogOutBox";
import useAuthStore from "../state-management/auth/strore";

const Profile = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { currentUser } = useAuthStore();
  return (
    <div
      onClick={() => setShowLogout(!showLogout)}
      className="relative flex flex-col justify-center items-center mx-3 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-solid border-green-400">
        <img
          src={
            currentUser
              ? currentUser.picture
              : "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685201428/vectors/user_profile_g0jjum.png"
          }
          alt=""
          className="w-full h-full"
        />
      </div>
      <h6 className="text-nowrap text-xs font-semibold">
        {currentUser && currentUser.given_name}
      </h6>
      {showLogout ? <LogOutBox /> : ""}
    </div>
  );
};

export default Profile;
