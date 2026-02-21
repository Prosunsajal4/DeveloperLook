import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";
const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Book" address="add-book" />
      <MenuItem icon={MdHomeWork} label="My Inventory" address="my-inventory" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Orders"
        address="manage-orders"
      />
      <MenuItem
        icon={BsFingerprint}
        label="My Wishlist"
        address="my-wishlist"
      />
    </>
  );
};

export default SellerMenu;