import React, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  CheckIcon,
  Bars4Icon,
} from "@heroicons/react/24/solid"; // Import Bars4Icon

const Navbar = ({ activeTab, onTabChange, toggleTheme, theme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex justify-between items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-2xl md:text-3xl">
        RBAC Dashboard
      </h1>

      {/* Dropdown for mobile */}
      <div className="relative sm:hidden">
        <button
          onClick={toggleDropdown}
          className="text-lg font-medium px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <Bars4Icon
            className={`w-6 h-6 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            } `}
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md w-48 z-10">
            <button
              onClick={() => onTabChange("user")}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                activeTab === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 dark:text-white hover:bg-blue-500 hover:text-white"
              }`}
            >
              Users
              {activeTab === "user" && (
                <CheckIcon className="w-5 h-5 text-green-500 inline-block ml-2" />
              )}
            </button>
            <button
              onClick={() => onTabChange("role")}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                activeTab === "role"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 dark:text-white hover:bg-blue-500 hover:text-white"
              }`}
            >
              Roles
              {activeTab === "role" && (
                <CheckIcon className="w-5 h-5 text-green-500 inline-block ml-2" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Tab buttons for larger screens */}
      <div className="hidden sm:flex space-x-6 sm:space-x-4 md:space-x-6">
        <button
          onClick={() => onTabChange("user")}
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out ${
            activeTab === "user"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 dark:text-white hover:bg-blue-500 hover:text-white"
          } sm:px-4 sm:py-2 md:px-5 md:py-2`}
        >
          Users
          {activeTab === "user" && (
            <CheckIcon className="w-5 h-5 text-green-500 inline-block ml-2" />
          )}
        </button>
        <button
          onClick={() => onTabChange("role")}
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out ${
            activeTab === "role"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 dark:text-white hover:bg-blue-500 hover:text-white"
          } sm:px-4 sm:py-2 md:px-5 md:py-2`}
        >
          Roles
          {activeTab === "role" && (
            <CheckIcon className="w-5 h-5 text-green-500 inline-block ml-2" />
          )}
        </button>
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-lg text-lg font-medium bg-gray-600 text-white transition-all duration-300 ease-in-out hover:bg-gray-500 sm:px-4 sm:py-2 md:px-5 md:py-2"
      >
        {theme === "dark" ? (
          <MoonIcon className="w-6 h-6 mr-2" />
        ) : (
          <SunIcon className="w-6 h-6 mr-2" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
