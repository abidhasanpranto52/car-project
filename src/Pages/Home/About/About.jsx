import React from "react";
import car from "../../../assets/Cars/sports car 2.jpg";
import about1 from "../../../assets/About/about-icon-1.png";
import about2 from "../../../assets/About/about-icon-2.png";
import about3 from "../../../assets/About/about-icon-3.png";
import "animate.css";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-item-center p-6 ">
      <div className="animate__animated animate__zoomInLeft">
        <img src={car} className="rounded mt-4" alt="" />
      </div>

      <div className="content p-5 mx-aut animate__animated animate__zoomInRight">
        <h1 className="text-3xl font-bold">Welcome to Our ToMmY Toys</h1>
        <p className="my-2">
          Tommy Toys is a beloved brand that has captured the hearts of children
          and parents alike. With a commitment to quality, innovation, and
          playfulness, Tommy Toys offers a wide range of captivating and
          engaging playthings. From imaginative playsets to educational puzzles
          and games, each Tommy Toy is meticulously crafted to inspire
          curiosity, spark creativity, and ignite a sense of wonder in young
          minds. . Let your child's imagination soar with Tommy
          Toys, where every moment is an adventure waiting to unfold.!
        </p>
        <a href='/' className="btn my-2 btn-outline btn-warning">
          read more
        </a>
        <div className="icons-container grid grid-cols-3 gap-2 place-items-center">
          <div className="bg-slate-200 rounded p-2">
            <img src={about1} alt="" />
            <h3>Endless Entertainment</h3>
          </div>
          <div className="bg-slate-200 rounded p-2">
            <img src={about2} alt="" />
            <h3>Designed for Learning</h3>
          </div>
          <div className="bg-slate-200 rounded p-2">
            <img src={about3} alt="" />
            <h3>Durability and Safety</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
