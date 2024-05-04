import React, { useState , useEffect } from 'react'
import { createContext } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from '../firebase';

export const AppContext = createContext();
const db = getFirestore(app);


function AppProvider({children}) {
    const [openSideBar,setopenSideBar] = useState(false);
    function ControlSideBar(){
        console.log("test");
        setopenSideBar(!openSideBar)
    }

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

    const [orderInfo,setorderInfo] = useState(null)
  return (
    <AppContext.Provider value={{posterData,orderInfo,setorderInfo,ControlSideBar,openSideBar}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider