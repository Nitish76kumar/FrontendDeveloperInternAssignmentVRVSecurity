import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const Footer = () => {
  return (
    <div className="w-full mt-4 bg-gray-100 dark:bg-gray-800 p-6 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Created by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Nitish Kumar
        </span>
      </p>
      <div className="mt-4 space-x-6 flex justify-center flex-wrap">
        <Link
          to="https://github.com/nitish76kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-2 sm:mb-0"
        >
          GitHub
        </Link>
        <Link
          to="https://www.linkedin.com/in/nitish-kumar-4bb805222/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-2 sm:mb-0"
        >
          LinkedIn
        </Link>
        <Link
          to="mailto:nitishkumar7645828185@gmail.com"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-2 sm:mb-0"
        >
          Email
        </Link>
      </div>
    </div>
  );
};

export default Footer;
