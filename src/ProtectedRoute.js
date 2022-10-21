import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.Auth);

  return user && user?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
