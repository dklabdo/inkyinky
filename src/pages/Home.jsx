import React, { useEffect, useState } from "react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default function Home() {
  const ref = collection(db, "Poster");
  const [posterData, setposterData] = useState([]);
  useEffect(() => {
    function getPosters() {
      getDocs(ref).then((data) => {
        const array = [];
        
        data.forEach((doc) => {
          array.push({...doc.data().posterInfo, id:doc.id})
        })
        console.log(array);
        setposterData(array)
      })
    }

    getPosters();
  }, []);
  return (
    <div className="relative top-32 ">
      <ContactUs />
      <Footer />
      <div className="flex gap-2 bg-red-500 h-[900px] p-12">
        
        {posterData.map((data, index) => (
          <PostCard
            key={index}
            img={data.img}
            name={data.name}
            price={data.mPrice}
          />
        ))}
      </div>
    </div>
  );
}

function PostCard({ name, img, price }) {
  return (
    <div className="w-72 h-96 bg-red-400">
      <div className="bg-green-400">
        <img src={img} alt="..." />
      </div>
      <div className="bg-yellow-400">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
