import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Panier() {
  const data = JSON.parse(window.localStorage.getItem("cart"));
  console.log(data);
  const { openPanier, setopenPanier } = useContext(AppContext);
  const {setpanier} = useContext(AppContext);
  const navigate = useNavigate();
  console.log(openPanier);
  function closeChart(){
    window.document.getElementById('root').classList.remove('overScroll')
    setopenPanier(false)
  }

  const [remove , setremove] = useState(false)

  function isRemoved(){
    setremove(!remove)
  }

  function confirmPanier(){
    setopenPanier(false)
    setpanier(true)
    navigate('/checkout')

  }
  

  return (
    <>
      {openPanier && (
        <section className="h-screen overscroll-auto drawerOpen top-0 right-0 z-30 bg-white px-4 shadow-lg shadow-black w-[80%] fixed xs:w-[100%] md:w-[50%]   overflow-y-hidden ">
          {data == null || data.length == 0 ? (
            <div className="w-full ">
              
              <div className="w-full h-full flex flex-col   ">
                <div className="flex justify-between items-center py-8 px-4">
                    <p className="text-black text-base">Chart</p>
                    <X size={30} onClick={() => closeChart(false)} />

                </div>
              <div className="  overflow-y-auto ">
               
              </div>
              <h1>votre panier est vide ...</h1>
             
            </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col   ">
                <div className="flex justify-between items-center py-8 px-4">
                    <p className="text-black text-base">Chart</p>
                    <X size={30} onClick={() => closeChart(false)} />

                </div>
              <div className="  overflow-y-auto ">
                {data.map((poster, index) => {
                  return (
                    <PanierPoster
                      key={index}
                      name={poster.PosterName}
                      price={poster.Price}
                      img={poster.img}
                      index={index}
                      triger={isRemoved}
                    />
                  );
                })}
              </div>
              <button onClick={() => confirmPanier()} className="w-full  py-3 bg-main text-white my-4 rounded-full">
                {" "}
                Confirm{" "}
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}

function PanierPoster({triger,index, name, price, img }) {
  function handleRemove(){
    const data = JSON.parse(window.localStorage.getItem('cart'))
    data.splice(index,1)
    window.localStorage.setItem('cart' , JSON.stringify(data))
    triger()
    console.log(data);
    
  }
  return (
    <div className="w-full flex items-center gap-4 my-4 ">
      <div>
        <img src={img} className="w-28 " />
      </div>
      <div className="flex justify-between w-full px-4">
      <div className="">
        <p className="line-clamp-1 text-black text-lg font-medium"> {name} </p>
        <p className="text-base font-light"> {price} </p>
      </div>
      <div onClick={() => handleRemove()} className="">
      <Trash />
      </div>
      </div>
    </div>
  );
}

export default Panier;
