import React, { useState, useEffect } from "react";

const RoleForm = ({ onSave, editingRole }) => {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);

  // When editing a role, populate the form with the current data
  useEffect(() => {
    if (editingRole) {
      setName(editingRole.name);
      setPermissions(editingRole.permissions);
    }
  }, [editingRole]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter a role name.");
      return;
    }

    // Pass the updated role or new role to the onSave function
    onSave({
      id: editingRole ? editingRole.id : Date.now(), // Use the existing role id if editing
      name,
      permissions: Array.isArray(permissions) ? permissions : [],
    });

    // Reset form after submission
    setName("");
    setPermissions(["Read", "Write", "Delete"]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
        >
          Role Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
          Permissions
        </label>
        <div className="flex flex-wrap gap-2">
          {["Read", "Write", "Delete"].map((permission) => (
            <label key={permission} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={permissions.includes(permission)}
                onChange={() =>
                  setPermissions((prevPermissions) =>
                    prevPermissions.includes(permission)
                      ? prevPermissions.filter((perm) => perm !== permission)
                      : [...prevPermissions, permission]
                  )
                }
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{permission}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto"
      >
        Save Role
      </button>
    </form>
  );
};

export default RoleForm;
