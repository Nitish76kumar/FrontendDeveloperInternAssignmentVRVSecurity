import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import RoleForm from "./components/RoleForm";
import RoleTable from "./components/RoleTable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "admin", role: "Admin", status: "Active" },
    { id: 2, username: "john_doe", role: "Editor", status: "Inactive" },
  ]);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [editingUser, setEditingUser] = useState(null);
  const [editingRole, setEditingRole] = useState(null);
  const [activeTab, setActiveTab] = useState("user");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply dark or light theme class to body
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSaveUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const handleSaveRole = (role) => {
    setRoles([...roles, role]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleEditRole = (roleId) => {
    const roleToEdit = roles.find((role) => role.id === roleId);
    setEditingRole(roleToEdit);
  };

  const handleToggleStatus = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}>
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      {activeTab === "user" ? (
        <>
          <UserForm onSave={handleSaveUser} editingUser={editingUser} />
          <UserTable
            users={users}
            onDelete={handleDeleteUser}
            onEdit={handleEditUser}
            onToggleStatus={handleToggleStatus}
          />
        </>
      ) : (
        <>
          <RoleForm onSave={handleSaveRole} editingRole={editingRole} />
          <RoleTable
            roles={roles}
            onDelete={handleDeleteRole}
            onEdit={handleEditRole}
          />
        </>
      )}
      
      <Footer/>
    </div>
  );
};

export default App;
