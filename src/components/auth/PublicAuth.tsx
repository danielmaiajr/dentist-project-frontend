import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const RequireAuth = () => {
  const location = useLocation();
  const authState = useAppSelector((state) => state.auth);

  return authState.validToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RequireAuth;
