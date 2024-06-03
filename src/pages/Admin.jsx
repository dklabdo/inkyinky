import React, { useContext, useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { AppContext } from "../AppProvider";
const db = getFirestore(app);
function Admin() {
  const [page, setpage] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <div className="h-screen top-0 py-20 relative w-[25%] bg-main ">
        <h1 className="text-lg  text-white text-center  font-medium">
          Admin Section
        </h1>
        <div className="w-full my-20 gap-6 group  flex flex-col">
          <button
            onClick={() => setpage(false)}
            className="text-white py-3 hover:text-main hover:bg-white text-base"
          >
            Orders
          </button>

          <button
            onClick={() => setpage(true)}
            className="text-white py-3 hover:text-main hover:bg-white text-base"
          >
            Add Poster
          </button>
        </div>
      </div>
      <div className="w-[75%] h-screen p-6 flex justify-center ">
        {page ? <AddPoster /> : <Orders />}
      </div>
    </div>
  );
}

function AddPoster() {
  const [file, setfile] = useState(null);
  const [posterInfo, setposterInfo] = useState({
    name: "",
    img: "",
    isFrame: true,
    lPrice: null,
    mPrice: null,
    category: "Cars",
  });

  const [url, seturl] = useState("");
  function getImg(e) {
    e.preventDefault();
    setfile(e.target.files[0]);
  }

  function handleChange(val) {
    if (val.name == "size") {
      const { name, checked } = val;
      setposterInfo({ ...posterInfo, [name]: checked });
    } else {
      const { name, value } = val;
      setposterInfo({ ...posterInfo, [name]: value });
    }
  }

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        seturl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  async function handleSubmit(e) {
    e.preventDefault();

    posterInfo.img = url;
    console.log(posterInfo);
    try {
      const sendPost = await addDoc(collection(db, "Poster"), { posterInfo });
      console.log(sendPost);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="md:flex w-full  flex-row relative top-3 py-28">
      <div className="w-full  flex flex-col  ">
        <form className="uppercase flex flex-col gap-3 px-5 ">
          <input
            className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent"
            onChange={(e) => handleChange(e.target)}
            name="name"
            type="text"
            placeholder="Poster name"
          />
          <div className="flex gap-3  px-3">
            <input
              className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent w-1/2 "
              onChange={(e) => handleChange(e.target)}
              name="mPrice"
              type="number"
              placeholder="M price"
            />
            <input
              className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent w-1/2 "
              onChange={(e) => handleChange(e.target)}
              name="lPrice"
              type="number"
              placeholder="L price"
            />
          </div>

          <input className=" " onChange={(e) => getImg(e)} type="file" />
          <select
            className="my-4"
            name="category"
            onChange={(e) => handleChange(e.target)}
          >
            <option value="Cars">Cars</option>
            <option value="Artist">Artist</option>
            <option value="Shows">Shows</option>
            <option value="Others">Others</option>
          </select>
          <button
            className="bg-[#003C43] w-1/3 px-8 py-2  rounded-full text-white "
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {" "}
            send{" "}
          </button>
        </form>
      </div>
      <div className=" md:h-3 md:scale-90 ">
        <img src={url} />
      </div>
    </div>
  );
}

function Orders() {
  const { oderData } = useContext(AppContext);
  console.log(oderData);
  return (
    <div className="w-full h-screen  ">
      <h1 className="text-lg  font-semibold "> Orders : </h1>
      <div className="w-full h-full my-20 ">
        {oderData.map((order, index) => {
          return (
            <Ligne
              panier={order.panier}
              nom={order.client.name}
              numero={order.client.phoneNumber}
              adresse={order.client.adresse}
            />
          );
        })}
      </div>
    </div>
  );
}
function Ligne({ nom, numero, adresse, panier }) {
  return (
    <>
      {panier.map((e, index) => {
        return (
          <div className="w-full px-4 my-2  flex justify-between border-b-2 ">
            <p className="text-base"> {nom}fdgfg </p>
            <p className="text-base"> {e.PosterName}fdgfg </p>
            <p className="text-base"> {numero} </p>
            <p className="text-base"> {adresse} </p>
            <button className="px-6 rounded-full py-2 text-white bg-main ">
              confirm
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Admin;
