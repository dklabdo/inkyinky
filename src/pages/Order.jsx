import React, { useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
export default function Order() {
  const navigate = useNavigate();
  const {setcheckoutInfo, orderInfo } = useContext(AppContext);
  const { name, img, mPrice, lPrice } = orderInfo;
  const [frame, setFrame] = useState(true);
  const [size, setSize] = useState("M");
  function handleBuy() {


    setcheckoutInfo(paymentInfo);

    navigate("/checkout");
  }
  const [paymentInfo, setpaymentInfo] = useState({
    Price: mPrice,
    PosterName: name,
    Size: size,
    withFrame: frame,
    img: img,
  });
  useEffect(() => {

    if(size == 'M'){
      if(frame){
        setpaymentInfo(
          {...paymentInfo, Price : mPrice ,Size : size , withFrame : frame }
        )
      }
      else{
        setpaymentInfo(
          {...paymentInfo, Price : mPrice - 1000 , Size : size , withFrame : frame }
        )

      }
    }
    else{
      if(frame){
        setpaymentInfo(
          {...paymentInfo, Price : lPrice ,Size : size , withFrame : frame  }
        )
      }
      else{
        setpaymentInfo(
          {...paymentInfo, Price : lPrice - 1000 , Size : size , withFrame : frame }
        )

      }

    }
    console.log(paymentInfo);
  } , [frame,size])

  
  

  return (
    <div className="    items-center  my-28">
      <div className=" h-full px-6 flex-col xl:flex-row flex items-center xl:scale-90  ">
        <div className="text-3xl xl:hidden text-start w-full font-semibold my-4 py-2">
          <h2>{name} </h2>
        </div>
        <div className="text-nowrap xl:hidden  w-full  text-lg pb-4 ">
          <p> price : {paymentInfo.Price} </p>
        </div>
        <div className=" w-full xl:px-16   xl:w-1/2 flex flex-col ">
          <div className="h-[75%]  flex justify-center xl:justify-start items-center ">
            <img src={img} className="scale-90 xl:scale-100 " />
          </div>
          <div className="w-full flex justify-center xl:justify-start xs:scale-75 xl:px-4   h-[25%] gap-3    ">
            <img src={img} className="w-40  " />
            <img src={img3} className="w-40 " />
          </div>
        </div>
        <div className="   xl:w-1/2 mt-10 flex flex-col gap-2 ">
          <div className="text-3xl hidden xl:block font-semibold  my-6">
            <h2> {name} </h2>
          </div>
          <div className="text-nowrap hidden xl:block text-lg  ">
            <p> price : {mPrice} </p>
          </div>
          <p className="text-base font-bold">size :</p>
          <div className="flex flex-row gap-4  my-4">
            <button
              onClick={() => {
                setSize("M");
              }}
              className={` px-6 rounded-full w-fit text-base py-2 border-black border-[1px] ${
                size == "M" && "bg-main text-white"
              }`}
            >
              {" "}
              M{" "}
            </button>
            <button
              onClick={() => {
                setSize("L");
              }}
              className={` px-6 rounded-full w-fit text-base py-2 border-black border-[1px] ${
                size == "L" && "bg-main text-white"
              }`}
            >
              {" "}
              L{" "}
            </button>
          </div>
          <p className="text-base font-bold">Frame :</p>
          <div className="flex gap-6 my-4 flex-row ">
          <button
              onClick={() => {
                setFrame(true);
              }}
              className={`   rounded-full px-6 oy-2 w-fit text-nowrap border-main border-[1px] ${
                frame ? "bg-main text-white" : "bg-white text-main"
              }`}
            >
              {" "}
              with frame{" "}
            </button>
            <button
              onClick={() => {
                setFrame(false);
              }}
              className={` px-6 rounded-full text-nowrap w-fit py-2   ${
                !frame ? "bg-main text-white" : "bg-white text-main"
              }`}
            >
              {" "}
              without frame{" "}
            </button>
            
          </div>
          <button className="bg-main py-3   rounded-3xl w-full  text-white font-bold border-black border-[1px] ">
            {" "}
            add to cart{" "}
          </button>
          <button
            onClick={() => {
              handleBuy();
            }}
            className="bg-white py-3   rounded-3xl w-full  text-main font-bold border-main border-[1px]"
          >
            {" "}
            buy{" "}
          </button>
          <div className="mt-10">
            <h2 className=" font-bold ">
              Your Style, Your Space: Discover Unique Posters at Our Store.
            </h2>
            <p>.fast shipping time(2-4 days).</p>
            <p>.High quality paper.</p>
            <p>.primiun frame in black.</p>
          </div>
          <div>
            <h2 className="font-bold">NOTE: </h2>
            <p>
              {" "}
              Your posters will be shipped directly to you within 2-4 business
              days. Rest assured, we prioritize safety and security throughout
              the shipping process to ensure your order arrives intact and on
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
