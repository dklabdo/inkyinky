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
    <div className="w-full h-[1000px] flex flex-col gap-12  relative top-52">
      <form className="flex flex-col gap-8">
        <input
          onChange={(e) => handleChange(e.target)}
          name="name"
          type="text"
          placeholder="Poster name"
        />
        <input
          onChange={(e) => handleChange(e.target)}
          name="mPrice"
          type="number"
          placeholder="Meduim price"
        />
        <input
          onChange={(e) => handleChange(e.target)}
          name="lPrice"
          type="number"
          placeholder="Large price"
        />
        <label htmlFor="frame">With frame</label>
        <input
          onChange={(e) => handleChange(e.target)}
          name="isFrame"
          id="frame"
          type="checkbox"
          placeholder=""
        />

        <input onChange={(e) => getImg(e)} type="file" />
        <select name="category" onChange={(e) => handleChange(e.target)}>
          <option value="Cars">Cars</option>
          <option value="Artist">Artist</option>
          <option value="Others">Others</option>
        </select>
        <button
          className="bg-black text-white py-4"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {" "}
          send{" "}
        </button>
      </form>
      <div className="w-full bg-red-500 h-96 flex justify-center">
        <img src={url} />
      </div>
    </div>
  );
}

export default Admin;
