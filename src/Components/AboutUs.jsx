import React from 'react'
import poster3d from "../assets/poster3d.png"
import tata from "../assets/tata.png"
function AboutUs() {
  return (
    <div id='AboutUs' className="flex items-center flex-col py-32  ">
      <h2 className="font-bold text-xl py-5 ">ABOUT US</h2>
      <div className="  items-center ">
        <div className=" lg:flex flex-row md:py-32  ">
          <div className=" xl:w-1/2   ">
            <img src={poster3d} className=" " />
          </div>
          <div className="   lg:w-1/2 md:py-16  px-6 md:px-14 ">
            <p className="md:text-lg py-9 md:py-28">
              {" "}
              Welcome to InkyHouse, your gateway to a world of artistic
              expression and visual storytelling. Founded in the vibrant streets
              of Algeria, our brand is more than just a marketplace for posters
              — we are purveyors of inspiration, curators of creativity, and
              champions of local talent.
            </p>
          </div>
        </div>

        <div className=" lg:flex flex-row  md:py-32 ">
          <div className="md:pl-7 lg:w-2/3 xl:py-16  px-6 xl:px-14  ">
            <h3 className=" font-bold text-nowrap text-lg md:text-xl text-center">
              {" "}
              our vision{" "}
            </h3>
            <p className="  py-5 md:py-16  md:text-lg xl:px-14 ">
              {" "}
              At InkyHouse, we envision a world where every wall tells a story,
              every space ignites imagination, and every individual finds their
              unique voice through art. We believe that art transcends
              boundaries and speaks a universal language that connects us all,
              regardless of background or culture. Through our carefully curated
              collection of posters, we aim to foster a sense of wonder, spark
              conversations, and inspire individuals to embrace their inner
              artist.
            </p>
          </div>
          <div className=" w-full md:w-fit xl:w-fit 2xl:w-1/4 ">
            <img
              className=" scale-75    w-full  lg:px-0 md:scale-110 lg:scale-125"
              src={tata}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs