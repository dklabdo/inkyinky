import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { X } from "lucide-react";
function Panier() {
  const data = JSON.parse(window.localStorage.getItem("cart"));
  console.log(data);
  const { openPanier, setopenPanier } = useContext(AppContext);
  console.log(openPanier);
  function closeChart(){
    window.document.getElementById('root').classList.remove('overScroll')
    setopenPanier(false)
  }
  

  return (
    <>
      {openPanier && (
        <section className="h-screen overscroll-auto drawerOpen top-0 right-0 z-30 bg-white px-4 shadow-lg shadow-black w-[80%] fixed md:w-[40%]   overflow-y-hidden ">
          {data == null ? (
            <div className="w-full ">
              <h1>votre panier est vide ...</h1>
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
                    />
                  );
                })}
              </div>
              <button className="w-full my-4 py-4 bg-main text-white my-4 rounded-full">
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

function PanierPoster({ name, price, img }) {
  return (
    <div className="w-full flex items-center gap-4 my-4 ">
      <div>
        <img src={img} className="w-28 " />
      </div>
      <div className="">
        <p className="line-clamp-1 text-black text-lg font-medium"> {name} </p>
        <p className="text-base font-light"> {price} </p>
      </div>
    </div>
  );
}

export default Panier;
