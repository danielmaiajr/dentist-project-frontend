import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";

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
