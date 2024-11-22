import React from "react";

const RoleTable = ({ roles, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Role Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Permissions
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b dark:border-gray-700">
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                {role.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                {role.permissions.join(", ")}
              </td>
              <td className="px-6 py-4 text-sm flex justify-start gap-2">
                {/* Edit button is active if 'Write' permission is present */}
                <button
                  onClick={() => onEdit(role.id)}
                  disabled={!role.permissions.includes("Write")}
                  className={`px-3 py-1 text-xs sm:text-sm rounded-full ${
                    role.permissions.includes("Write")
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Edit
                </button>

                {/* Delete button is active if 'Delete' permission is present */}
                <button
                  onClick={() => onDelete(role.id)}
                  disabled={!role.permissions.includes("Delete")}
                  className={`px-3 py-1 ml-2 text-xs sm:text-sm rounded-full ${
                    role.permissions.includes("Delete")
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
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

export default RoleTable;
