import React, { useState, useEffect } from "react";

const UserForm = ({ onSave, editingUser }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (editingUser) {
      setUsername(editingUser.username);
      setRole(editingUser.role);
      setStatus(editingUser.status);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: editingUser ? editingUser.id : Date.now(),
      username,
      role,
      status,
    });
    setUsername("");
    setRole("");
    setStatus("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md"
    >
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
      >
        Save
      </button>
    </form>
  );
};

export default UserForm;
