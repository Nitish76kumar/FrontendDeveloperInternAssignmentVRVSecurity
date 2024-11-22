import React from "react";

const UserTable = ({ users, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Username
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b dark:border-gray-700">
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                {user.username}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                {user.role}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                <button
                  onClick={() => onToggleStatus(user.id)}
                  className={`px-3 py-1 rounded-lg ${
                    user.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {user.status}
                </button>
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                <button
                  onClick={() => onEdit(user.id)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
