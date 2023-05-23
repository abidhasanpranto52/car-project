import "./Service.css";
import {
  BsFillClockFill,
  BsUnity,
} from "react-icons/bs";
import { AiOutlineHourglass, AiOutlineNumber } from "react-icons/ai";

const Service = () => {
  return (
    <div >
      <div className="service-container rounded-md  bg-[#f3e4e470] p-10 text-center">
        <h1>The Most Comprehensive Care in the Tommy Toys</h1>
        <p className=" text-slate-500">
          {" "}
          OUR PROGRAM MEETS YOUR NEEDS TODAY AND TOMORROW
        </p>
        <div className="service">
          <div className="grid grid-cols-1 lg:grid-cols-2 text-center ">
            <div data-aos="fade-right" className=" text-white text-center bg-slate-900  service-box p-5 rounded-lg">
              <h5 className="text-center">
                <BsUnity className="mx-auto" />
              </h5>
              <div className="card-body">
                <h2 className="text-2xl font-semibold">Unparalleled Safety</h2>
                <p className="card-text fw-semibold mb-3">
                At Tommy Toys, your child's safety is our top priority. We go above and beyond to ensure that every toy undergoes thorough safety checks and adheres to stringent regulations, giving you peace of mind and allowing your child to play without any worries.
                </p>
                <a to="/" className="btn btn-outline btn-warning font-semibold">
                  Learn More
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className=" text-white text-center bg-slate-600  service-box p-5 rounded-lg">
              <h5 className="text-center">
                <AiOutlineHourglass className="mx-auto" />
              </h5>
              <div className="card-body">
                <h2 className="text-2xl font-bold">Educational Excellence</h2>
                <p className="card-text fw-semibold mb-3">
                We believe in the power of play as a tool for learning. That's why our toys are thoughtfully designed to stimulate your child's curiosity, creativity, and cognitive skills. With Tommy Toys, you can be confident that your child is not only having fun but also engaging in valuable educational experiences..
                </p>
                <a to="/" className="btn btn-outline btn-warning font-semibold">
                  Learn More
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className=" text-white text-center bg-slate-600  service-box p-5 rounded-lg">
              <h5 className="text-center">
                <BsFillClockFill className="mx-auto" />
              </h5>
              <div className="card-body">
                <h2 className="text-2xl font-bold">24-Hour Monitoring</h2>
                <p className="card-text fw-semibold mb-3">
                we understand that safety is of paramount importance. That's why we implement 24-hour monitoring systems to ensure the utmost security and protection for your child.  With our comprehensive 24-hour monitoring, you can have peace of mind knowing that your child's well-being is our top priority.
                </p>
                <a to="/" className="btn btn-outline btn-warning font-semibold">
                  Learn More
                </a>
              </div>
            </div>
            <div data-aos="fade-right" className=" text-white text-center bg-slate-900  service-box p-5 rounded-lg">
              <h5 className="text-center">
                <AiOutlineNumber className="mx-auto" />
              </h5>
              <div className="card-body">
                <h2 className="text-2xl font-bold">Quality </h2>
                <p className="card-text fw-semibold mb-3">
                We understand that toys should withstand the test of time and endure hours of play. That's why we handpick the highest-quality materials and employ skilled craftsmanship to create durable toys that can be enjoyed for years. Tommy Toys are built to last, ensuring that your investment in your child's playtime is worthwhile
                </p>
                <a to="/" className="btn btn-outline btn-warning font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
