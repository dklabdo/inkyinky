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
    const ref2 = collection(db, "Orders");
  const [posterData, setposterData] = useState([]);
  const [oderData, setoderData] = useState([]);
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



  useEffect(() => {
    function getOrders() {
      getDocs(ref2).then((data) => {
        const array = [];
        console.log(data);
        
        data.forEach((doc) => {
          
          
          array.push({...doc.data(), id:doc.id})
        })
        console.log(array);
        setoderData(array)
      })
    }

    getOrders();
  }, []);



    const [orderInfo,setorderInfo] = useState('')
    const [currentId,setcurrentId] = useState('')
    const [checkoutInfo,setcheckoutInfo] = useState('');
    const [openPanier,setopenPanier] = useState(false);

    const [panier,setpanier] = useState(false);

    
  return (
    <AppContext.Provider value={{oderData, panier,setpanier, openPanier,setopenPanier , checkoutInfo,setcheckoutInfo ,currentId,setcurrentId,posterData,orderInfo,setorderInfo,ControlSideBar,openSideBar}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider