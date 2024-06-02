import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
function PostCard({ product }) {
  const {name, img, mPrice} = product
    const navigate = useNavigate();
    const {setorderInfo} = useContext(AppContext);
    function handleBuyPoster(){
      setorderInfo(product)
        navigate('/orderPage')
    }
    return (
      <div onClick={()=>handleBuyPoster()}  className="min-w-[260px] xs2:inline red  h-fit mx-auto my-6 ">
        <div className=" w-full h-[300px]  object-cover ">
          <img className="w-full rounded-xl  h-full" src={img} alt="..." />
        </div>
        <div className="w-full  px-4">
          <h2>{name}</h2>
          <p>{mPrice}</p>
        </div>
      </div>
    );
  }

  

  export default PostCard