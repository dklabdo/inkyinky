import React from "react";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { useState } from "react";

function Checkout() {
  const { orderInfo } = useContext(AppContext);

  return (
    <div className=" lg:divide-x-2 lg:divide-x-reverse   divide-black/30 flex-col-reverse gap-12  relative top-24  my-32 flex items-center     lg:flex-row-reverse  ">
      <div className="     h-full w-full lg:w-[60%] flex flex-col  ">
        <h2 className="mb-12 pl-8 text-lg">Write down your information</h2>
        <div className="  h-full  px-8  ">
          <form className="checkoutform space-y-2 ">
            <div className="flex gap-3 ">
              <div className="fn flex flex-col space-y-2 w-full ">
                <label className=" text-gray-600 text-sm pl-1" htmlFor="fn">
                  Full Name
                </label>
                <input
                  className="border border-[#003C43]  p-3 text-sm font-thin rounded-full bg-transparent  "
                  type="text"
                  id="fn"
                  //value={user.FullName}
                  placeholder="ahmed naser"
                  //onChange={data}
                />
              </div>
              <div className="fn flex flex-col w-full space-y-2">
                <label className="text-gray-600 pl-1 text-sm" htmlFor="wl">
                  willaya
                </label>
                <input
                  className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent "
                  type="text"
                  id="wl"
                  //value={user.Willaya}
                  placeholder="enter your willaya"
                  //onChange={data}
                />
              </div>
            </div>
            <div className="fn flex flex-col space-y-2">
              <label className="text-gray-600 pl-1 text-sm" htmlFor="em">
                Email
              </label>
              <input
                className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent "
                type="Email"
                id="em"
                //value={user.Email}
                placeholder="enter your email"
                // onChange={data}
              />
            </div>
            <div className="fn flex flex-col space-y-2">
              <label className="text-gray-600 pl-1 text-sm" htmlFor="ad">
                Address
              </label>
              <input
                className=" border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent "
                type="text"
                id="ad"
                //value={user.Address}
                placeholder="enter your addres"
                //onChange={data}
              />
            </div>
            <div className="fn flex flex-col space-y-2">
              <label className="text-gray-600 pl-1 text-sm" htmlFor="nb">
                Phone number
              </label>
              <input
                className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent "
                type="number"
                id="nb"
                //value={user.Phonenumber}
                placeholder="enter your phone number"
                //onChange={data}
              />
            </div>

            <div className="fn flex flex-col space-y-2">
              <label className="text-gray-600 pl-1 text-sm" htmlFor="nb">
                Select
              </label>
              <input
                className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent "
                type="text"
                id="nb"
                //value={user.Selectdeliveryconpany}
                placeholder="yalidi"
                required
                //onChange={data}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-full   lg:w-[50%]  px-12">
        <div className="mb-12 text-lg pl-2">Receape details:</div>
        <section className=" ">
          {" "}
          <img src={img2} className="w-52" />
        </section>
        <div className="px-4 flex flex-col gap-2">
          <p>
            {" "}
            <span>Title: </span> <span>{orderInfo.PosterName}</span>{" "}
          </p>
          <p>
            <span>SIZE:</span> <span>{orderInfo.Size}</span>{" "}
          </p>
          <p>
            <span>FRAME:</span>{" "}
            <span>{orderInfo.withFrame ? "With frame" : "Without frame"}</span>{" "}
          </p>
        </div>

        <div className=" justify-between items-center px-2 my-8  flex flex-row ">
          <button className="bg-[#003C43] w-fit px-8 py-2  rounded-full text-white  ">
            Confirm Order
          </button>
          <div className="w-fit text-md font-semibold ">
            price: {orderInfo.Price}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
