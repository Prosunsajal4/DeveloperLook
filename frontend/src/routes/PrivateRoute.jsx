import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import BookCourierSpinner from "../components/Shared/BookCourierSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <BookCourierSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;