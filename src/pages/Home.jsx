import React, { useEffect, useState } from "react";
import ContactUs from "../Components/ContactUs";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import PostCard from "../Components/PostCard";

import { Link } from "react-router-dom";
export default function Home() {
  const {posterData } = useContext(AppContext);
  
  return (
    <div className={`relative top-20 overflow-y-auto`} >
      <Hero/>
      <div className="flex xs2:inline-flex xs2:overflow-x-auto w-full mt-28  gap-2 xs2:flex-nowrap flex-wrap  px-4 md:px-12  h-fit lg:px-32">
        
        {posterData.map((data, index) => {
          return(
            <>
            {
              index < 8 && <PostCard
              key={index}
              img={data.img}
              name={data.name}
              price={data.mPrice}
              product={data}
            />
            }
            </>
          )
        })}
      </div>
      <Link className="link hover:border-[#003C43] hover:border-[2px] hover:text-[#003C43] hover:bg-white  absolute -translate-x-2/4 -translate-y-2/4 text-[white] font-[400] text-[16px]  bg-[#003C43] rounded-xl mt-14 px-8 py-3 left-2/4" to="/Category">View All</Link>
        <AboutUs/>
      <ContactUs />
      
    </div>
  );
}

