

function Panier() {
    const data = JSON.parse(window.localStorage.getItem('cart'))
    const lastPoster = data.length - 1;
    console.log(data);
    return(
        <section className="flex gap-4 items-center h-[700px]  overflow-y-hidden ">
            <div className="w-[40%] flex flex-col ">
                <img className="   bg-red-500" src={data[lastPoster].img} />
                <button className="w-full py-4 bg-main text-white my-4 rounded-full"> Confirm </button>
            </div>
            <div className="w-[60%] h-full overflow-y-auto ">
                {
                   data.map((poster,index) => {
                    return(
                        <PanierPoster key={index} name={poster.PosterName} price={poster.Price} img={poster.img} />
                    )
                   })
                }


            </div>
        </section>
    )
}

function PanierPoster({name,price,img}) {
    
    return(
        <div className="w-full flex items-center gap-4 my-4 ">
            <div>
                <img src={img} className="w-28 " />
            </div>
            <div className="">
                <p className="line-clamp-1 text-black text-lg font-medium"> {name} </p>
                <p className="text-base font-light"> {price} </p>
            </div>


        </div>
    )
}

export default Panier;