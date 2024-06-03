import React, { useEffect } from "react";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Swal from "sweetalert2";
const db = getFirestore(app);

function Checkout() {
  const navigate = useNavigate();
  const ChartInfo = JSON.parse(window.localStorage.getItem("cart"))
  console.log(ChartInfo);
  const { checkoutInfo, panier } = useContext(AppContext);
  console.log(checkoutInfo);
  useEffect(() => {
    if (checkoutInfo == "" && panier == false) {
      console.log("test");
      navigate("/");
    }
  }, []);
  const [clientInfo, setclientInfo] = useState({
    name: "",
    willaya: "",
    mail: "",
    adresse: "",
    phoneNumber: "",
  });

  function hadnleChange(e) {
    const { name, value } = e.target;
    setclientInfo({ ...clientInfo, [name]: value });
  }

  async function handleBuy(e) {
    e.preventDefault();
    const posters = ChartInfo.map(({ img, ...rest }) => rest);
    
    

    const res = await setDoc(doc(db, "Orders", clientInfo.phoneNumber), {
      
        panier: panier ? posters : checkoutInfo,
        client: clientInfo,
      
    }).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Commande envoyer avec succes",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate("/");
      });
    });

    console.log(res);
  }

  return (
    <div className=" lg:divide-x-2 lg:divide-x-reverse   divide-black/30 flex-col-reverse gap-12  relative top-24  my-32 flex items-center     lg:flex-row-reverse  ">
      <div className="     h-full w-full lg:w-[60%] flex flex-col  ">
        <h2 className="mb-12 pl-8 text-lg">Write down your information</h2>
        <div className="  h-full  px-8  ">
          <form
            onSubmit={(e) => handleBuy(e)}
            method="POST"
            className="checkoutform space-y-2 "
          >
            <div className="flex md:flex-row flex-col gap-3 ">
              <div className="fn flex flex-col space-y-2 w-full ">
                <label className=" text-gray-600 text-sm pl-1" htmlFor="fn">
                  Full Name
                </label>
                <input
                  className="border border-[#003C43]  p-3 text-sm font-thin rounded-full bg-transparent  "
                  type="text"
                  id="fn"
                  name="name"
                  onChange={(e) => hadnleChange(e)}
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
                  name="willaya"
                  onChange={(e) => hadnleChange(e)}
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
                name="mail"
                onChange={(e) => hadnleChange(e)}
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
                name="adresse"
                onChange={(e) => hadnleChange(e)}
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
                name="phoneNumber"
                onChange={(e) => hadnleChange(e)}
                //value={user.Phonenumber}
                placeholder="enter your phone number"
                //onChange={data}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-[#003C43] w-full px-8 py-2 my-4   rounded-full text-white  "
              >
                Confirm Order
              </button>
            </div>

            <div className="fn flex flex-col space-y-2"></div>
          </form>
        </div>
      </div>
      <div className="flex overflow-x-auto flex-col w-full lg:w-[40%] ">
        <h1 className="my-6 pl-8 text-lg font-medium  ">Recap details</h1>
        {panier ? (
          <DisplayPanier data={ChartInfo} />
        ) : (
          <BuyProduct
            name={checkoutInfo.PosterName}
            img={checkoutInfo.img}
            size={checkoutInfo.Size}
            frame={checkoutInfo.withFrame}
            price={checkoutInfo.Price}
          />
        )}
      </div>
    </div>
  );
}

function BuyProduct({ img, name, size, frame, price }) {
  return (
    <div className="w-full   lg:w-[50%]  px-8">
      <section className=" ">
        {" "}
        <img src={img} className="w-52" />
      </section>
      <div className="px-4 flex flex-col gap-2">
        <p>
          {" "}
          <span>Title: </span> <span>{name}</span>{" "}
        </p>
        <p>
          <span>SIZE:</span> <span>{size}</span>{" "}
        </p>
        <p>
          <span>FRAME:</span>{" "}
          <span>{frame ? "with frame" : "without frame"}</span>{" "}
        </p>
      </div>

      <div className=" justify-between items-center px-2 my-8  flex flex-row ">
        <div className="w-fit text-md font-semibold flex gap-2">
          <span className="mr-2 font-bold text-lg text-main">Total </span>
          {price}DA{" "}
        </div>
      </div>
    </div>
  );
}

function DisplayPanier({ data }) {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex w-full overflow-x-auto ">
      {data.map((data, index) => {
        return (
          <BuyProduct
            key={index}
            name={data.PosterName}
            img={data.img}
            size={data.Size}
            frame={data.withFrame}
            price={data.Price}
          />
        );
      })}
    </div>
  );
}

export default Checkout;
