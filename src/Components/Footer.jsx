import React, { Component } from "react";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <div className="bg-main pt-24 w-full mt-32      py-20 flex flex-col gap-32 justify-center items-center  text-white px-12 ">
        <div className="gap-3 md:flex items-start  md:gap-20  lg:gap-52  ">
          <div className=" text-left md:py-24 lg:py-1   md:w-1/2 h-full ">
            <h2 className="text-2xl uppercase my-8 font-bold">inkyhouse </h2>
            <p className="text-xs">
            At INKYHOUSE we believe that your living or working space should reflect who you are and what you love. 
            That's why we curate a diverse selection of posters that cater to various styles, tastes, and interests. Whether you're a fan of minimalist designs,
             nature enthusiasts, or pop culture aficionados, we have something for everyone.{" "}
            </p>
          </div>
          <div className="pt-20 md:pt-0 flex flex-col lg:flex-row  gap-20 ">
            <div className="flex gap-20 md:w-1/2">
              <div className=" flex flex-col  text-left   w-1/3">
                <h3 className="font-bold text-lg my-4">navigation </h3>
                <Link className="text-base font-thin my-1 " to="/home">
                    Home{" "}
                </Link>
                <Link className="text-base font-thin my-1 " to="/Category">
                  Category{" "}
                </Link>
                <a className="text-base font-thin my-1 " href="/#AboutUs">
                  aboutus{" "}
                </a>
                <a className="text-base font-thin my-1 " href="/#contact">
                  Contactus{" "}
                </a>
                <Link className="text-base font-thin my-1 " to="/admin">
                  Admin{" "}
                </Link>
              </div>
              <div className="flex flex-col  text-left  w-1/3">
                <h3 className="font-bold text-lg my-4">Licences </h3>
                <a
                  className="text-base font-thin my-1 "
                  href=""
                >
                  Privacy Policy{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Copyright{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col text-left  my-4 md:my-0">
              <h3 className="font-bold text-lg my-4">Contacts </h3>
              <a className="text-base font-thin my-1 " href="">
                {" "}
                (406) 555-0120
              </a>
              <a className="text-base font-thin my-1 " href="">
                hey@gmail.com
              </a>
              <a className="text-base font-thin my-1 " href="">
                Sidi Bel Abbes
              </a>
            </div>
          </div>
        </div>
        <p className="font-extralight text-nowrap">
          all right reserved for inkyhouse 2023 &copy;{" "}
        </p>
      </div>
    </>
  );
}
export default Footer;
