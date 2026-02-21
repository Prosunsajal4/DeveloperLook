import useAuth from "../../../hooks/useAuth";
import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";
const bookImgUrl =
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState(user?.displayName || "");
  const [formPhoto, setFormPhoto] = useState(user?.photoURL || "");
  const [formPassword, setFormPassword] = useState("");

  const handleUpdateProfile = () => {
    setFormName(user?.displayName || "");
    setFormPhoto(user?.photoURL || "");
    setShowForm(true);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let success = true;
    let msg = "";
    try {
      await updateUserProfile(formName, formPhoto);
      msg += "Profile updated successfully!\n";
    } catch (err) {
      msg += "Failed to update profile: " + err.message + "\n";
      success = false;
    }
    if (formPassword) {
      try {
        const auth = getAuth();
        await updatePassword(auth.currentUser, formPassword);
        msg += "Password updated successfully!";
      } catch (err) {
        msg += "Failed to update password: " + err.message;
        success = false;
      }
    }
    alert(msg.trim());
    if (success) setShowForm(false);
  };


  const handleChangePassword = async () => {
    const newPassword = prompt("Enter new password:");
    if (newPassword) {
      try {
        const auth = getAuth();
        await updatePassword(auth.currentUser, newPassword);
        alert("Password updated successfully!");
      } catch (err) {
        alert("Failed to update password: " + err.message);
      }
    }
  };
  const [role, isRoleLoading] = useRole();

  console.log(role, isRoleLoading);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="book cover"
          src={bookImgUrl}
          className="w-full mb-4 rounded-t-lg h-56 object-contain bg-lime-50"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-lime-500 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-gray-600 ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-gray-600 ">{user?.email}</span>
              </p>

              <div>
                <button
                  className="bg-lime-500  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800 block mb-1"
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
                {}
                {showForm && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <form
                      className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col gap-4"
                      onSubmit={handleFormSubmit}
                    >
                      <h2 className="text-lg font-bold mb-2 text-center">
                        Update Profile
                      </h2>
                      <label className="text-sm">Name</label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="border rounded px-2 py-1"
                        required
                      />
                      <label className="text-sm">Photo URL</label>
                      <input
                        type="text"
                        value={formPhoto}
                        onChange={(e) => setFormPhoto(e.target.value)}
                        className="border rounded px-2 py-1"
                        required
                      />
                      <img
                        src={formPhoto}
                        alt="Preview"
                        className="mx-auto rounded-full h-16 w-16 object-cover border"
                        style={{ marginBottom: "8px" }}
                      />
                      <label className="text-sm">New Password</label>
                      <input
                        type="password"
                        value={formPassword}
                        onChange={(e) => setFormPassword(e.target.value)}
                        className="border rounded px-2 py-1"
                        placeholder="Leave blank to keep current"
                      />
                      <div className="flex gap-2 justify-center mt-2">
                        <button
                          type="submit"
                          className="bg-lime-500 text-white px-4 py-1 rounded hover:bg-lime-700"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400"
                          onClick={() => setShowForm(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                <button
                  className="bg-lime-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;