import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
export function Navbare() {
  const navigate = useNavigate();
  const { ControlSideBar } = useContext(AppContext);
  return (
    <nav className="fixed  bg-white  z-10 h-14 md:h-24">
      <h1
        onClick={() => navigate("/home")}
        className="cursor-pointer font-bold text-lg text-main"
      >
        INKYHOUSE
      </h1>
      <div className="hidden md:flex middle gap-6  lg:gap-12">
        <Link to="/ " className="link">
          Home
        </Link>
        <Link to="/Category" className="link">
          Category
        </Link>
        <a href="#contact" className="link">
          Contact Us
        </a>
        <a href="#AboutUs" className="link">
          About Us
        </a>
      </div>
      <div className="hidden md:flex   gap-4 ">
        <Search size={30} />
        <ShoppingBag size={30} />
      </div>
      <div
        onClick={() => ControlSideBar()}
        className="items-center flex gap-2 md:hidden"
      >
        <Search size={23} />
        <Menu className="cursor-pointer" size={30} />
      </div>
    </nav>
  );
}
export default Navbare;
