import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppProvider";
import { useState } from "react";
import { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  
} from "@material-tailwind/react";
import Panier from "./Panier";
export function Navbare() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const { ControlSideBar , openPanier,setopenPanier } = useContext(AppContext);
  function openChart(){
    
    setopenPanier(true)
    
  }
  return (
    <nav className="fixed  bg-white py-10  z-10 h-14 md:h-24">
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
        <a href="/#contact" className="link">
          Contact Us
        </a>
        <a href="/#AboutUs" className="link">
          About Us
        </a>
      </div>
      <div onClick={() => openChart()} className="hidden md:flex   gap-4 ">
          <ShoppingBag   size={30} />
      </div>
      <div
        // onClick={() => ControlSideBar()}
        className="items-center flex gap-2 md:hidden"
      >
        <div onClick={() => openChart()} className="flex md:hidden   gap-4 ">
          <ShoppingBag   size={25} />
      </div>
      

      </div>
    </nav>
  );
}
export default Navbare;
