import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

export default function ProtectedRoute({ children, skeleton }) {
  const { token, isAuthentected, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return skeleton || <Loading />;
  }
  if (!isAuthentected) {
    return <Navigate to={`/login/`} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
  return <></>;
}
