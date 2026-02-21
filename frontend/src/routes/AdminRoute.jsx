import { Navigate } from "react-router";
import BookCourierSpinner from "../components/Shared/BookCourierSpinner";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <BookCourierSpinner />;
  if (role === "admin") return children;
  return <Navigate to="/" replace="true" />;
};

export default AdminRoute;