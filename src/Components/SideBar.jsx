import React from 'react'
import { AppContext } from '../AppProvider'
import { useContext } from 'react'
function SideBar() {
    const {ControlSideBar,openSideBar} = useContext(AppContext);
    console.log(openSideBar);
  return (
    <>
        {openSideBar &&
        <div onClick={()=>ControlSideBar()} className='md:hidden w-full fixed z-30 top-0  h-screen   bg-black/50'>
        <div className='h-full absolute animate-drawer drawerOpen bg-white w-[80%] z-40 '>
            dfgfgfdgfdg
        </div>
        </div>
        }
    </>
  )
}

export default SideBar