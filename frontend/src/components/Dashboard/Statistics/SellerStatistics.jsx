import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SellerStatistics = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [inventory, setInventory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    Promise.all([
      axiosSecure.get(`/my-inventory/${user.email}`),
      axiosSecure.get(`/manage-orders/${user.email}`),
    ])
      .then(([invRes, ordersRes]) => {
        setInventory(invRes.data || []);
        setOrders(ordersRes.data || []);
      })
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.price || 0),
    0
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grow">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center bg-blue-500 text-white">
            📚
          </div>
          <div className="p-4 text-right">
            <p className="text-sm text-blue-gray-600">Total Books</p>
            <h4 className="text-2xl font-semibold">{inventory.length}</h4>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center bg-green-500 text-white">
            🛒
          </div>
          <div className="p-4 text-right">
            <p className="text-sm text-blue-gray-600">Total Orders</p>
            <h4 className="text-2xl font-semibold">{orders.length}</h4>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center bg-orange-500 text-white">
            💰
          </div>
          <div className="p-4 text-right">
            <p className="text-sm text-blue-gray-600">Total Revenue</p>
            <h4 className="text-2xl font-semibold">${totalRevenue}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerStatistics;