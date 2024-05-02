import React, { Component } from "react";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <div className="bg-main pt-24 w-full my-32      py-20 flex flex-col gap-32 justify-center items-center  text-white px-12 ">
        <div className="gap-3 md:flex items-start  md:gap-20  lg:gap-52  ">
          <div className=" text-left md:py-24 lg:py-1   md:w-1/2 h-full ">
            <h2 className="text-2xl uppercase my-8 font-bold">inkyhouse </h2>
            <p className="text-xs">
              At ARTPILLAR, we offer professional painting services for
              restaurants, homes, offices, and more. Our experienced team of
              painters is dedicated to delivering exceptional results with
              attention to detail and superior craftsmanship. Whether you're
              looking to refresh the interior of your restaurant, enhance the
              curb appeal of your home, or update the look of your office space,
              we've got you covered.{" "}
            </p>
          </div>
          <div className="pt-20 md:pt-0 flex flex-col lg:flex-row  gap-20 ">
            <div className="flex gap-20 md:w-1/2">
              <div className=" flex flex-col  text-left   w-1/3">
                <h3 className="font-bold text-lg my-4">navigation </h3>
                <a className="text-base font-thin my-1 " href="">
                  service{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Agency{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Resource{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Contact{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  FAQs{" "}
                </a>
              </div>
              <div className="flex flex-col  text-left  w-1/3">
                <h3 className="font-bold text-lg my-4">Licences </h3>
                <a
                  className="text-base font-thin my-1 "
                  href="https://www.youtube.com/watch?v=-5sl8aPMtmE&list=RDvRQb_-mRcAc&index=17"
                >
                  Privacy Policy{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Copyright{" "}
                </a>
                <a className="text-base font-thin my-1 " href="">
                  Email Address{" "}
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
