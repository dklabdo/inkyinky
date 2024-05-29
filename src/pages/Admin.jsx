import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
const db = getFirestore(app);
function Admin() {
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
  <div className="md:flex flex-row relative top-3 py-28">
      <div className=" md:w-1/2 md:h-[1000px] flex flex-col  ">
    <h1 className="uppercase text-xl font-bold   pl-4">admin section </h1>
    <p className=" text-xs pb-10 pl-24 ">write down the poster information</p>
    <form className="uppercase flex flex-col gap-3 px-5 ">
      <input className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent w-1/2"
        onChange={(e) => handleChange(e.target)}
        name="name"
        type="text"
        placeholder="Poster name"
      />
      <div className="flex gap-3 w-1/2 px-3"><input className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent w-1/2 "
        onChange={(e) => handleChange(e.target)}
        name="mPrice"
        type="number"
        placeholder="M price"
      />
      <input className="border border-[#003C43] p-3 text-sm font-thin rounded-full bg-transparent w-1/2 "
        onChange={(e) => handleChange(e.target)}
        name="lPrice"
        type="number"
        placeholder="L price"
      /></div>
      <div className=" flex flex-row gap-3">
       </div>

      <input className=" "
       onChange={(e) => getImg(e)} type="file" />
      <select className="w-1/2" name="category" onChange={(e) => handleChange(e.target)}>
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
      <img  src={url} />
    </div></div> 
  );
  }
  


export default Admin;