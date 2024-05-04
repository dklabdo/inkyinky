import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import PostCard from "../Components/PostCard";

function Allposters() {
  const { posterData } = useContext(AppContext);
  const [category, setCategory] = useState("All");

  function select(val) {
    console.log(val);
    setCategory(val);
  }
  const getCategory = (test) => {
     
    return test == category || category == "All"
   
  };
  return (
    <div className="w-full  relative flex flex-col gap-20 top-32">
      <div className="flex justify-center gap-6 px-10">
        <Bubble active={category == "All"} select={select} content="All" />
        <Bubble active={category == "Cars"} select={select} content="Cars" />
        <Bubble active={category == "Shows"} select={select} content="Shows" />
        <Bubble
          active={category == "Artist"}
          select={select}
          content="Artist"
        />
        <Bubble
          active={category == "Others"}
          select={select}
          content="Others"
        />
      </div>
      <div className="flex h-fit xs2:inline-flex xs2:overflow-x-auto   gap-2 xs2:flex-nowrap flex-wrap  px-4 md:px-12  h-fit lg:px-32" >
        {posterData.map((data,index) => {
          return(
           getCategory(data.category) &&  <PostCard
           key={index}
           img={data.img}
           name={data.name}
           price={data.mPrice}
         />
          );
        })}
      </div>
    </div>
  );
}

function Bubble({ content, active, select }) {
  return (
    <button
      onClick={() => select(content)}
      className={`py-2 rounded-full text-white hover:bg-main transition  px-8 w-fit  ${
        active ? "bg-main" : "bg-gray-400"
      }`}
    >
      {" "}
      {content}{" "}
    </button>
  );
}

export default Allposters;
