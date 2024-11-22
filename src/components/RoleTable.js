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
                <button
                  onClick={() => onEdit(role.id)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className="px-3 py-1 ml-2 bg-red-600 text-white rounded-full text-xs sm:text-sm"
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
