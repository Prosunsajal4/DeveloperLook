import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewModal from "../../Modal/ReviewModal";
const CustomerOrderDataRow = ({ order, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const axiosSecure = useAxiosSecure();

  const { _id, image, name, category, price, quantity, status, bookId } =
    order || {};

  const handleCancel = async () => {
    try {
      await axiosSecure.delete(`/orders/${_id}`);
      closeModal();
      if (refetch) refetch();
    } catch {

      alert("Failed to cancel order");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">${price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2">
        <button
          onClick={() => setIsOpen(true)}
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
        >
          <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
          <span className="relative cursor-pointer">Cancel</span>
        </button>

        <button
          onClick={() => setReviewOpen(true)}
          className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
        >
          <span className="absolute inset-0 bg-blue-200 opacity-60 rounded-full"></span>
          <span className="relative">Review</span>
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          onConfirm={handleCancel}
        />

        <ReviewModal
          isOpen={reviewOpen}
          closeModal={() => setReviewOpen(false)}
          bookId={bookId}
          onReviewed={refetch}
        />
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;