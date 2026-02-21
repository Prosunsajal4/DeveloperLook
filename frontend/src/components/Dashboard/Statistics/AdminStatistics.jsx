import { useEffect, useState, useMemo } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

const AdminStatistics = () => {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();


  const [mockMonthlyData] = useState(() => [
    {
      name: "Jan",
      revenue: Math.floor(Math.random() * 5000) + 1000,
      orders: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Feb",
      revenue: Math.floor(Math.random() * 5000) + 1000,
      orders: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Mar",
      revenue: Math.floor(Math.random() * 5000) + 1000,
      orders: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Apr",
      revenue: Math.floor(Math.random() * 5000) + 1000,
      orders: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "May",
      revenue: Math.floor(Math.random() * 5000) + 1000,
      orders: Math.floor(Math.random() * 50) + 10,
    },
  ]);

  useEffect(() => {
    Promise.all([
      axiosSecure.get("/users"),
      axiosSecure.get("/books"),
      axiosSecure.get("/my-orders"),
    ])
      .then(([usersRes, booksRes, ordersRes]) => {
        setUsers(usersRes.data || []);
        setBooks(booksRes.data || []);
        setOrders(ordersRes.data || []);
      })
      .finally(() => setLoading(false));
  }, [axiosSecure]);


  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.price || 0),
    0
  );


  const categoryData = books.reduce((acc, book) => {
    const existing = acc.find((item) => item.name === book.category);
    if (existing) {
      existing.count += 1;
    } else if (book.category) {
      acc.push({ name: book.category, count: 1 });
    }
    return acc;
  }, []);


  const roleData = users.reduce((acc, user) => {
    const existing = acc.find(
      (item) => item.name === (user.role || "customer")
    );
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: user.role || "customer", value: 1 });
    }
    return acc;
  }, []);


  const monthlyData = useMemo(
    () => [
      ...mockMonthlyData,
      { name: "Jun", revenue: totalRevenue, orders: orders.length },
    ],
    [mockMonthlyData, totalRevenue, orders.length]
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="p-6">
      {}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here's your overview.
        </p>
      </div>

      {}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {}
        <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-orange-500/20">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaDollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-sm opacity-80">Total Revenue</p>
            <h3 className="text-3xl font-bold">
              ${totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>

        {}
        <div className="relative bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-blue-500/20">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <BsFillCartPlusFill className="w-6 h-6" />
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                +8%
              </span>
            </div>
            <p className="text-sm opacity-80">Total Orders</p>
            <h3 className="text-3xl font-bold">{orders.length}</h3>
          </div>
        </div>

        {}
        <div className="relative bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-pink-500/20">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <BsFillHouseDoorFill className="w-6 h-6" />
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                +15%
              </span>
            </div>
            <p className="text-sm opacity-80">Total Books</p>
            <h3 className="text-3xl font-bold">{books.length}</h3>
          </div>
        </div>

        {}
        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-emerald-500/20">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaUserAlt className="w-6 h-6" />
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                +20%
              </span>
            </div>
            <p className="text-sm opacity-80">Total Users</p>
            <h3 className="text-3xl font-bold">{users.length}</h3>
          </div>
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Revenue Overview
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            User Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {roleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Books by Category
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#9ca3af"
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="count" fill="#6366f1" radius={[0, 8, 8, 0]}>
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;