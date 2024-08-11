import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const RequiredAuth = ({ children }: Props) => {
  const location = useLocation();
  const currentUser = window.sessionStorage.getItem("saveCurrentUser");
  if (!currentUser) {
    return (
      <Navigate
        to={"/login"}
        state={{ path: location.pathname }}
        replace={true}
      />
    );
  }
  return children;
};

export default RequiredAuth;
