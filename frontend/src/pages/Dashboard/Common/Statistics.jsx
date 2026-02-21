import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import CustomerStatistics from "../../../components/Dashboard/Statistics/CustomerStatistics";
import SellerStatistics from "../../../components/Dashboard/Statistics/SellerStatistics";
import BookCourierSpinner from "../../../components/Shared/BookCourierSpinner";
import useRole from "../../../hooks/useRole";
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <BookCourierSpinner />;
  return (
    <div>
      {role === "customer" && <CustomerStatistics />}
      {role === "seller" && <SellerStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;