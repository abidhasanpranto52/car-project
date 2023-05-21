import React from "react";
import "animate.css";
import img1 from "../../../assets/Banner/img1.jpg";
import img2 from "../../../assets/Banner/img2.jpg";
import img3 from "../../../assets/Banner/img3.jpg";
import img4 from "../../../assets/Banner/img4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full  lg:h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="md:text-6xl font-bold">
                Unleash Adventure with Our Exciting Toy Cars!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-secondary btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest Toys</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="md:text-6xl font-bold">
                Explore Endless Possibilities with Our Versatile Toy Cars!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-secondary btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest Toys</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="md:text-6xl font-bold">
                Discover the Perfect Toy Car for Every Child
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-secondary btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest Toys</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="md:text-6xl font-bold">
                Explore Endless Possibilities with Our Versatile Toy Cars!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-secondary btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest Toys</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
