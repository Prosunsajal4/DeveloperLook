import { FaUserCog, FaUserTag } from "react-icons/fa";
import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { FaClipboardList } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaClipboardList}
        label="All Orders"
        address="admin-orders"
      />
      <MenuItem
        icon={FaUserTag}
        label="Seller Requests"
        address="seller-requests"
      />
      <MenuItem
        icon={BsFingerprint}
        label="My Wishlist"
        address="my-wishlist"
      />
    </>
  );
};

export default AdminMenu;