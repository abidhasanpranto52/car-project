import React from "react";
import car from "../../../assets/Cars/sports car 2.jpg";
import about1 from "../../../assets/About/about-icon-1.png";
import about2 from "../../../assets/About/about-icon-2.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-item-center p-6 ">
      <div data-aos="fade-up">
        <img src={car} className="rounded mt-4" alt="" />
      </div>

      <div data-aos="fade-down" className="content p-5 mx-aut">
        <div className="icons-container grid grid-cols-2 gap-2 my-4 place-items-center">
          <div className="bg-slate-200 rounded p-2">
            <img className="mx-auto" src={about1} alt="" />
            <h3>Endless Entertainment</h3>
          </div>
          <div className="bg-slate-200 rounded p-2">
            <img className="mx-auto" src={about2} alt="" />
            <h3>Refrashment</h3>
          </div>
        </div>
        <h1 className="text-5xl font-bold">Welcome to Our ToMmY Toys</h1>
        <p className="my-2 font-semibold text-gray-500">
          Tommy Toys is a beloved brand that has captured the hearts of children
          and parents alike. With a commitment to quality, innovation, and
          playfulness, Tommy Toys offers a wide range of captivating and
          engaging playthings. Toys are one of the most beloved and cherished
          products for children. They provide endless hours of entertainment,
          encourage imagination, and promote cognitive and physical development!
        </p>

        <a href="/" className="btn my-2 btn-block btn-outline btn-warning">
          read more
        </a>
      </div>
    </div>
  );
};

export default About;
