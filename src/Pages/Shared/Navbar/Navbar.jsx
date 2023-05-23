import React, { useContext, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar rounded font-bold bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/alltoys"}>All Toys</Link>
            </li>

            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>

            {user?.email ? (
              <>
                <li>
                  <Link to={"/mytoys"}>My Toys</Link>
                </li>
                <li>
                  <Link to={"/addtoy"}>Add A Toy</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to={"/login"}>Log In</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to={"/"} className="flex">
          <img style={{ height: 60 }} src={logo} alt="" />
          <span className="lg:leading-loose  text-red-700  md:text-3xl">
            ToMmY Toys
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/alltoys"}>All Toys</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link to={"/mytoys"}>My Toys</Link>
              </li>
              <li>
                <Link to={"/addtoy"}>Add A Toy</Link>
              </li>
            </>
          ) : (
            <></>
          )}
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )}
            <Link
              onClick={handleLogOut}
              to={""}
              className="btn btn-outline border-none btn-warning"
            >
              <AiOutlineLogout className="lg:text-2xl" />
            </Link>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-outline border-none btn-warning"
          >
            <AiOutlineLogin className="lg:text-2xl font-bold" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
