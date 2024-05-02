import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function AppProvider({children}) {
    const [openSideBar,setopenSideBar] = useState(false);
    function ControlSideBar(){
        console.log("test");
        setopenSideBar(!openSideBar)
    }

    const [orderInfo,setorderInfo] = useState(null)
  return (
    <AppContext.Provider value={{orderInfo,setorderInfo,ControlSideBar,openSideBar}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider