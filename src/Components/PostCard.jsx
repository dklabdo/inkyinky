import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
function PostCard({ name, img, price,id }) {
    const navigate = useNavigate();
    const {setcurrentId} = useContext(AppContext);
    function handleBuyPoster(){
        setcurrentId(id)
        navigate('/orderPage')
    }
    return (
      <div onClick={()=>handleBuyPoster()}  className="w-[280px] xs2:inline   h-fit mx-auto my-6 ">
        <div className=" w-full h-[300px] object-cover ">
          <img className="w-full h-full" src={img} alt="..." />
        </div>
        <div className="w-full  px-4">
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    );
  }

  

  export default PostCard