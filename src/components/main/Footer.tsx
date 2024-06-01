"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-50 rounded-b-lg">
      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-gray-200 text-lg font-bold">
          &copy; 2024 All rights reserved. Designed by &nbsp;
          <Link
            href="
                https://www.linkedin.com/in/divya-d-shah/
                "
            className="text-blue-600 hover:text-green-500"
          >
            Divya Shah
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
