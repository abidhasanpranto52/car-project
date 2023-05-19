import React from "react";
import logo from "../../../assets/logo/logo.png";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ "font-family": "'Rancho', cursive" }}
      className="navbar font-bold bg-base-100"
    >
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
            <Link to={"/mytoys"}>My Toys</Link>
          </li>
          <li>
            <Link to={"/add a toy"}>Add A Toy</Link>
          </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img style={{ height: 60 }} src={logo} alt="" />
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
          <li>
            <Link to={"/mytoys"}>My Toys</Link>
          </li>
          <li>
            <Link to={"/add a toy"}>Add A Toy</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={""} className="btn btn-outline border-none btn-warning">
          <AiOutlineSearch className="lg:text-2xl" />
        </Link>
        
        <Link to={"/login"} className="btn btn-outline btn-warning btn-xs lg:btn-md">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
