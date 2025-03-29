import React, { useState } from "react";
import { useUpdateUserRoleMutation } from "../../../redux/features/auth/authApi";

const UpdateUserModel = ({ user, onclose, onRoleUpdate }) => {
  const [role, setRole] = useState(user?.role);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const handleUpdateRole = async () => {
    try {
      console.log("Updating role for user:", user?._id, "to", role); 
      const response = await updateUserRole({
        userId: user?._id,
        role,
      }).unwrap();
      console.log("Response from API:", response); 
      alert("Role updated successfully");
      onRoleUpdate(); 
      onclose(); 
    } catch (error) {
      console.error("Failed to update user role", error);
      alert("Failed to update role");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Edit User</h2>
        <div className="mb-4 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            value={user?.email}
            readOnly
            className="mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-5 focus-outline-none"
          />
        </div>
        <div className="mb-4 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-5 focus-outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-end pt-5 ">
          <button
            onClick={onclose}
            className="bg-gray-500 text-white px-4 rounded py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateRole}
            className="bg-indigo-500 text-white px-4 rounded py-2 mr-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModel;
