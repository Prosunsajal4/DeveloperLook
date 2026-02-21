import { Navigate } from "react-router";
import BookCourierSpinner from "../components/Shared/BookCourierSpinner";
import useRole from "../hooks/useRole";

const SellerRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <BookCourierSpinner />;
  if (role === "seller") return children;
  return <Navigate to="/" replace="true" />;
};

export default SellerRoute;