import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const RequireAuth = () => {
  const location = useLocation();
  const authState = useAppSelector((state) => state.auth);

  return authState.validToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
