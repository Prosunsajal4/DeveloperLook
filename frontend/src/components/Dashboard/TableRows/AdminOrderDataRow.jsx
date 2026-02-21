import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminOrderDataRow = ({ order, customerCount = 0 }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [status, setStatus] = useState(order?.status || "pending");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return axiosSecure.patch(`/orders/${order._id}`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
    },
  });

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{order?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{order?.customer}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{customerCount}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">${order?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{order?.quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-1 border-2 border-blue-300 focus:outline-blue-500 rounded-md bg-white"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => mutateAsync()}
          className="btn btn-sm btn-primary"
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
      </td>
    </tr>
  );
};

export default AdminOrderDataRow;