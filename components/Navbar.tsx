'use client'
import React, { useState } from "react";
import LogoMenu from "./LogoMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import EmptyLogoMenu from "./EmptyLogoMen";
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector(SelectUser);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="h-20 flex justify-between items-center px-4 md:px-6 text-white">
       
        <div className="flex items-center">
     {
        user ? ( <LogoMenu />):(<EmptyLogoMenu />)
     }
       
          <Link href="/">
            <h1 className="text-lg md:text-2xl font-bold text-black">
              Scavenger
            </h1>
          </Link>
        </div>

        <div className="flex items-center mt-2">
          {user ? (
            <>
              <button className="hidden md:block">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0 md:w-40 md:mr-6"
                  href="/workspace-settings/1"
                >
                  WorkSpace settings
                </Link>
              </button>
              <button className="hidden md:block">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:w-40"
                  href="/profile"
                >
                  Account
                </Link>
              </button>
            </>
          ) : null}

          {user ? null : (
            <button className="hidden md:block bg-blue-500 ml-4 md:ml-6 px-4 py-2 rounded-md hover:bg-blue-700">
              Try now
            </button>
          )}

       
          <button
            className="md:hidden bg-blue-500 ml-4 px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
         
          {!user ? (
            <Link
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-700"
            >
              Try now
            </Link>
          ) : (
            <>
            <Link
            href="/workspace-settings/"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            WorkSpace settings
          </Link>
          <Link
            href="/profile"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Account
          </Link>
          </>
          )}
        </div>
      )}

    </>
  );
}

export default Navbar;