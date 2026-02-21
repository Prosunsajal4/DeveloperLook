import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AdminOrderDataRow from "../../../components/Dashboard/TableRows/AdminOrderDataRow";

const ManageAllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin/orders");
      return data;
    },
  });

  const customerCounts = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      map[o.customer] = (map[o.customer] || 0) + 1;
    });
    return map;
  }, [orders]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-xl font-semibold mb-4">All Orders</h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {Object.entries(customerCounts).map(([email, count]) => (
            <div key={email} className="badge badge-lg gap-2">
              <span className="font-medium">{email}</span>
              <span className="opacity-70">{count}</span>
            </div>
          ))}
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Customer
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Orders by Customer
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Quantity
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Status
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <AdminOrderDataRow
                    key={order._id}
                    order={order}
                    customerCount={customerCounts[order.customer] || 0}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;